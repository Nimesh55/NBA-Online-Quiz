package com.nba.online_quiz.service;

import com.nba.online_quiz.model.Question;

import java.util.List;
import java.util.Optional;

public interface IQuestionService {

    Question createQuestion(Question question);

    List<Question> getAllQuestions();

    Optional<Question> getQuestionById(Long id);

    List<String> getAllSubjects();

    Question updateQuestion(Long id, Question question);

    void deleteQuestion(Long id);

    List<Question> getQuestionsForUser(Integer numOfQuestions, String subject);

}