window.GRAMMAR_DATA = [
  {
    "id": "be-i-you-a1",
    "linkedLessonId": "lesson-1",
    "order": 1,
    "title": "Present simple be: I, you",
    "level": "A1",
    "status": "available",
    "page": "grammar-topic.html?id=be-i-you-a1",
    "overview": {
      "lead": "Use am with I, and are with you. We use be to say who someone is, where a person is from, and to ask simple questions.",
      "keyRule": "I am / I’m   ·   You are / You’re",
      "example": "I’m from Brazil. Are you a student?",
      "subjects": [
        "I → am",
        "you → are"
      ]
    },
    "uses": [
      {
        "icon": "1",
        "title": "Introduce yourself",
        "text": "Use I am when you say your name or nationality.",
        "example": "I’m Mina. I’m Brazilian."
      },
      {
        "icon": "2",
        "title": "Talk about another person",
        "text": "Use you are when you say something about the person you are speaking to.",
        "example": "You’re from Japan."
      },
      {
        "icon": "3",
        "title": "Ask about people",
        "text": "Put am or are before the subject in a question.",
        "example": "Are you from Poland?"
      }
    ],
    "forms": [
      {
        "id": "positive",
        "icon": "+",
        "title": "Affirmative",
        "formula": "I + am / You + are",
        "example": "I am French. / You are Swiss.",
        "translation": "Я француз. / Ты швейцарец.",
        "note": "In conversation, use I’m and you’re."
      },
      {
        "id": "negative",
        "icon": "−",
        "title": "Negative",
        "formula": "I + am not / You + are not",
        "example": "I’m not British. / You aren’t Japanese.",
        "translation": "Я не британец. / Ты не японец.",
        "note": "Use I’m not; not I amn’t. You are not = you aren’t = you’re not."
      },
      {
        "id": "question",
        "icon": "?",
        "title": "Questions",
        "formula": "Am I ...? / Are you ...?",
        "example": "Am I late? / Are you a student?",
        "translation": "Я опоздал? / Ты студент?",
        "note": "In questions, am / are comes before I / you."
      },
      {
        "id": "short",
        "icon": "✓",
        "title": "Short answers",
        "formula": "Yes, I am. / No, I’m not. / Yes, you are. / No, you aren’t.",
        "example": "Are you Portuguese? No, I’m not.",
        "translation": "Ты португалец? Нет.",
        "note": "Do not use contractions in positive short answers: Yes, I am (not Yes, I’m)."
      }
    ],
    "questionBuilder": {
      "title": "Question word order",
      "note": "Where comes first, then be, then the subject.",
      "pattern": [
        "Where",
        "are",
        "you",
        "from?"
      ],
      "example": "Where are you from?",
      "translation": "Откуда ты? "
    },
    "commonMistakes": [
      {
        "wrong": "I are from India.",
        "right": "I am from India.",
        "reason": "Use am with I."
      },
      {
        "wrong": "You am a student.",
        "right": "You are a student.",
        "reason": "Use are with you."
      },
      {
        "wrong": "You from Poland?",
        "right": "Are you from Poland?",
        "reason": "Start a yes/no question with Are."
      },
      {
        "wrong": "I amn’t Japanese.",
        "right": "I’m not Japanese.",
        "reason": "Use I’m not for the negative contraction."
      }
    ],
    "quizExercises": [
      {
        "title": "Choose the form",
        "instructions": "Choose the correct form of be.",
        "items": [
          {
            "type": "single",
            "prompt": "I ___ from India.",
            "options": [
              "am",
              "are",
              "is"
            ],
            "answer": 0
          },
          {
            "type": "single",
            "prompt": "You ___ a student.",
            "options": [
              "am",
              "are",
              "is"
            ],
            "answer": 1
          },
          {
            "type": "single",
            "prompt": "I ___ not from Poland.",
            "options": [
              "am",
              "are",
              "is"
            ],
            "answer": 0
          },
          {
            "type": "single",
            "prompt": "___ you from the UK?",
            "options": [
              "Am",
              "Are",
              "Is"
            ],
            "answer": 1
          }
        ]
      },
      {
        "title": "Complete the sentences",
        "instructions": "Write am or are.",
        "items": [
          {
            "type": "text",
            "prompt": "I ___ a teacher.",
            "answer": "am"
          },
          {
            "type": "text",
            "prompt": "You ___ from Brazil.",
            "answer": "are"
          },
          {
            "type": "text",
            "prompt": "___ I late?",
            "answer": "Am"
          },
          {
            "type": "text",
            "prompt": "Where ___ you from?",
            "answer": "are"
          }
        ]
      },
      {
        "title": "Correct the mistake",
        "instructions": "Choose the correct sentence.",
        "items": [
          {
            "type": "select",
            "prompt": "I not from France.",
            "options": [
              "I’m not from France.",
              "I are not from France.",
              "I no from France."
            ],
            "answer": 0
          },
          {
            "type": "select",
            "prompt": "You from Korea?",
            "options": [
              "You are from Korea?",
              "Are you from Korea?",
              "Am you from Korea?"
            ],
            "answer": 1
          },
          {
            "type": "select",
            "prompt": "I amnt British.",
            "options": [
              "I am’nt British.",
              "I’m not British.",
              "I no British."
            ],
            "answer": 1
          },
          {
            "type": "select",
            "prompt": "Where you are from?",
            "options": [
              "Where are you from?",
              "Where you from are?",
              "Are where you from?"
            ],
            "answer": 0
          }
        ]
      },
      {
        "title": "Build complete sentences",
        "instructions": "Put the words in order. Use correct punctuation.",
        "items": [
          {
            "type": "reorder",
            "prompt": "from / I’m / Mexico",
            "tokens": [
              "from",
              "I’m",
              "Mexico"
            ],
            "answer": "I’m from Mexico."
          },
          {
            "type": "reorder",
            "prompt": "not / you / are / a teacher",
            "tokens": [
              "not",
              "you",
              "are",
              "a teacher"
            ],
            "answer": "You are not a teacher.",
            "acceptedAnswers": [
              "You are not a teacher.",
              "You aren’t a teacher."
            ]
          },
          {
            "type": "reorder",
            "prompt": "you / are / Portuguese / ?",
            "tokens": [
              "you",
              "are",
              "Portuguese",
              "?"
            ],
            "answer": "Are you Portuguese?"
          },
          {
            "type": "reorder",
            "prompt": "are / where / you / from / ?",
            "tokens": [
              "are",
              "where",
              "you",
              "from",
              "?"
            ],
            "answer": "Where are you from?"
          }
        ]
      }
    ]
  }
];
