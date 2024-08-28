import { Component, OnInit } from '@angular/core';
import { QuizService } from './quiz.service';
import { Question } from './question.model';
import { CommonModule } from '@angular/common';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importar FormsModule
import { ImageLoaderComponent } from './image-loader.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NgIf, FormsModule, ImageLoaderComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'cuestionario';
  currentQuestion: Question | null = null;
  questionIndex = 0;
  totalQuestions = 30; // Máximo de preguntas
  correctAnswersCount = 0;
  incorrectAnswersCount = 0;
  maxIncorrectAnswers = 3;
  answeredQuestions: Question[] = [];
  finalResults: { total: number; correct: number; incorrect: number; percentage: number; passed: boolean; wrongQuestions: Question[] } | null = null;
  selectedOption: string = ''; // Para almacenar la opción seleccionada

  constructor(private quizService: QuizService) {}

  ngOnInit() {
    this.loadNewQuestion();
  }

  loadNewQuestion() {
    if (this.questionIndex >= this.totalQuestions) {
      this.showResults();
      return;
    }

    this.currentQuestion = this.quizService.getRandomQuestion();
    if (this.currentQuestion) {
      this.questionIndex++;
      this.selectedOption = ''; // Limpiar selección previa
    } else {
      this.showResults();
    }
  }

  checkAnswer() {
    if (this.currentQuestion && this.selectedOption) {
      if (this.selectedOption === this.currentQuestion.correctAnswer) {
        this.correctAnswersCount++;
      } else {
        this.incorrectAnswersCount++;
        this.answeredQuestions.push({
          ...this.currentQuestion,
          options: this.currentQuestion.options,
          correctAnswer: this.currentQuestion.correctAnswer // Incluye la respuesta correcta
        });
      }

      this.loadNewQuestion();
    }
  }

  showResults() {
    const totalQuestionsAnswered = this.correctAnswersCount + this.incorrectAnswersCount;
    const percentage = (this.correctAnswersCount / totalQuestionsAnswered) * 100;
    const passed = this.incorrectAnswersCount <= this.maxIncorrectAnswers;

    this.currentQuestion = null;

    this.finalResults = {
      total: totalQuestionsAnswered,
      correct: this.correctAnswersCount,
      incorrect: this.incorrectAnswersCount,
      percentage: percentage,
      passed: passed,
      wrongQuestions: this.answeredQuestions
    };

    // Reiniciar el juego o cualquier otra acción necesaria
  }

  restartQuiz() {
    this.questionIndex = 0;
    this.correctAnswersCount = 0;
    this.incorrectAnswersCount = 0;
    this.answeredQuestions = [];
    this.finalResults = null;
    this.loadNewQuestion(); // Comenzar de nuevo
  }
}
