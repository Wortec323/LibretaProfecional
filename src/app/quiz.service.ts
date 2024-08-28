import { Injectable } from '@angular/core';
import { Question } from './question.model';
import { QUESTIONS } from './questions'; // Importa las preguntas desde el archivo separado

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  private questions: Question[] = QUESTIONS; // Usa las preguntas importadas
  private answeredQuestions: Set<number> = new Set(); // Para controlar las preguntas respondidas

  constructor() {}

  getRandomQuestion(): Question | null {
    if (this.questions.length === 0) {
      return null;
    }

    const question = this.questions[Math.floor(Math.random() * this.questions.length)];
    return this.shuffleOptions(question); // Mezcla las opciones antes de devolver la pregunta
  }

  private shuffleOptions(question: Question): Question {
    const shuffledOptions = question.options.sort(() => Math.random() - 0.5);
    return {
      ...question,
      options: shuffledOptions
    };
  }
}
