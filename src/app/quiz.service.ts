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
    const availableQuestions = this.questions.filter((_, index) => !this.answeredQuestions.has(index));

    if (availableQuestions.length === 0) {
      return null; // Si no quedan preguntas disponibles
    }

    const randomIndex = Math.floor(Math.random() * availableQuestions.length);
    const question = availableQuestions[randomIndex];

    this.answeredQuestions.add(this.questions.indexOf(question)); // Marca la pregunta como respondida
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
