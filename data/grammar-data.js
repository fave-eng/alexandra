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
  },
  {
    "id": "be-he-she-it-a1",
    "linkedLessonId": "lesson-2",
    "order": 2,
    "title": "Present simple be: he, she, it",
    "level": "A1",
    "status": "available",
    "page": "grammar-topic.html?id=be-he-she-it-a1",
    "overview": {
      "lead": "Use is with he, she and it. We use be to talk about a person, a job, a place or a thing.",
      "keyRule": "He is / He’s · She is / She’s · It is / It’s",
      "example": "She’s a nurse. Is he from the UK?",
      "subjects": [
        "he → is",
        "she → is",
        "it → is"
      ]
    },
    "uses": [
      {
        "icon": "1",
        "title": "Talk about a person",
        "text": "Use he for a man and she for a woman.",
        "example": "He’s a waiter. She’s a doctor."
      },
      {
        "icon": "2",
        "title": "Talk about a place or thing",
        "text": "Use it for places and things.",
        "example": "It’s in Rome. It’s a good job."
      },
      {
        "icon": "3",
        "title": "Ask about a person or place",
        "text": "Put is before he, she or it.",
        "example": "Is she a nurse? Where is he from?"
      }
    ],
    "forms": [
      {
        "id": "positive",
        "icon": "+",
        "title": "Affirmative",
        "formula": "He / She / It + is",
        "example": "He is an artist. / She’s Polish. / It’s in London.",
        "translation": "Он художник. / Она полька. / Это находится в Лондоне.",
        "note": "He is = He’s; She is = She’s; It is = It’s. Use a/an before a singular job: a doctor, an artist."
      },
      {
        "id": "negative",
        "icon": "−",
        "title": "Negative",
        "formula": "He / She / It + is not",
        "example": "He isn’t a teacher. / She’s not British. / It isn’t in Italy.",
        "translation": "Он не учитель. / Она не британка. / Это не в Италии.",
        "note": "is not = isn’t = ’s not. Use is with he, she, it; do not use are."
      },
      {
        "id": "question",
        "icon": "?",
        "title": "Questions",
        "formula": "Is + he / she / it + ...?",
        "example": "Is she a doctor? / Is it in France? / Where is he from?",
        "translation": "Она врач? / Это во Франции? / Откуда он?",
        "note": "Is comes before the subject. With a question word, say Where is she from? or What’s his job?"
      },
      {
        "id": "short",
        "icon": "✓",
        "title": "Short answers",
        "formula": "Yes, he / she / it is. · No, he / she / it isn’t.",
        "example": "Is she a doctor? Yes, she is. / Is it in Paris? No, it isn’t.",
        "translation": "Она врач? Да. / Это в Париже? Нет.",
        "note": "In positive short answers, do not contract is: Yes, she is (not Yes, she’s)."
      }
    ],
    "questionBuilder": {
      "title": "Word order in questions",
      "note": "Start with Is for a yes/no question. Start with Where / What for an information question.",
      "pattern": [
        "Where",
        "is",
        "Sophie",
        "from?"
      ],
      "example": "Where is Sophie from?",
      "translation": "Откуда Софи?"
    },
    "commonMistakes": [
      {
        "wrong": "She are a doctor.",
        "right": "She is a doctor.",
        "reason": "Use is with she."
      },
      {
        "wrong": "Is he a teacher? Yes, he’s.",
        "right": "Is he a teacher? Yes, he is.",
        "reason": "No contraction in a positive short answer."
      },
      {
        "wrong": "Where he is from?",
        "right": "Where is he from?",
        "reason": "Use is before he in a question."
      },
      {
        "wrong": "He is doctor.",
        "right": "He is a doctor.",
        "reason": "Use a/an before a singular job."
      }
    ],
    "quizExercises": [
      {
        "title": "Choose the correct form",
        "instructions": "Choose the correct word.",
        "items": [
          {
            "type": "single",
            "prompt": "She ___ an office worker.",
            "options": [
              "am",
              "is",
              "are"
            ],
            "answer": 1
          },
          {
            "type": "single",
            "prompt": "___ he a taxi driver?",
            "options": [
              "Is",
              "Are",
              "Am"
            ],
            "answer": 0
          },
          {
            "type": "single",
            "prompt": "It ___ in London.",
            "options": [
              "are",
              "am",
              "is"
            ],
            "answer": 2
          },
          {
            "type": "single",
            "prompt": "He ___ a doctor.",
            "options": [
              "isn’t",
              "aren’t",
              "am not"
            ],
            "answer": 0
          }
        ]
      },
      {
        "title": "Complete the sentences",
        "instructions": "Write is or isn’t.",
        "items": [
          {
            "type": "text",
            "prompt": "She ___ a businesswoman.",
            "answer": "is"
          },
          {
            "type": "text",
            "prompt": "He ___ from Italy. (negative)",
            "answer": "isn’t",
            "acceptedAnswers": [
              "isn’t",
              "is not"
            ]
          },
          {
            "type": "text",
            "prompt": "___ Kasia a doctor?",
            "answer": "Is"
          },
          {
            "type": "text",
            "prompt": "It ___ in Rome. (negative)",
            "answer": "isn’t",
            "acceptedAnswers": [
              "isn’t",
              "is not"
            ]
          }
        ]
      },
      {
        "title": "Correct the sentences",
        "instructions": "Choose the correct sentence.",
        "items": [
          {
            "type": "select",
            "prompt": "She are a nurse.",
            "options": [
              "She is a nurse.",
              "She am a nurse.",
              "She a nurse."
            ],
            "answer": 0
          },
          {
            "type": "select",
            "prompt": "Where Rob is from?",
            "options": [
              "Where Rob from?",
              "Where is Rob from?",
              "Is where Rob from?"
            ],
            "answer": 1
          },
          {
            "type": "select",
            "prompt": "Is he an artist? Yes, he’s.",
            "options": [
              "Yes, he’s.",
              "Yes, he are.",
              "Yes, he is."
            ],
            "answer": 2
          },
          {
            "type": "select",
            "prompt": "It are not in London.",
            "options": [
              "It not in London.",
              "It isn’t in London.",
              "It aren’t in London."
            ],
            "answer": 1
          }
        ]
      },
      {
        "title": "Build complete sentences",
        "instructions": "Put the words in order. Use correct punctuation.",
        "items": [
          {
            "type": "reorder",
            "prompt": "is / a doctor / she",
            "tokens": [
              "is",
              "a doctor",
              "she"
            ],
            "answer": "She is a doctor."
          },
          {
            "type": "reorder",
            "prompt": "from / is / he / where / ?",
            "tokens": [
              "from",
              "is",
              "he",
              "where",
              "?"
            ],
            "answer": "Where is he from?"
          },
          {
            "type": "reorder",
            "prompt": "it / not / is / in France",
            "tokens": [
              "it",
              "not",
              "is",
              "in France"
            ],
            "answer": "It is not in France.",
            "acceptedAnswers": [
              "It is not in France.",
              "It isn’t in France."
            ]
          },
          {
            "type": "reorder",
            "prompt": "a shop assistant / she / is / ?",
            "tokens": [
              "a shop assistant",
              "she",
              "is",
              "?"
            ],
            "answer": "Is she a shop assistant?"
          }
        ]
      }
    ]
  },
  {
    "id": "was-were-born-a1",
    "linkedLessonId": "lesson-4",
    "order": 4,
    "title": "Past simple be: was / were (born)",
    "level": "A1+",
    "status": "available",
    "page": "grammar-topic.html?id=was-were-born-a1",
    "passScore": 100,
    "overview": {
      "lead": "Use was and were to talk about the past. We use was born or were born for a person’s birth.",
      "keyRule": "I / he / she / it → was     ·     you / we / they → were",
      "example": "I was born in 2002. Were you born in Russia?",
      "subjects": [
        "I, he, she, it → was",
        "you, we, they → were"
      ]
    },
    "uses": [
      {
        "icon": "1",
        "title": "Past events",
        "text": "Use was / were for a past situation.",
        "example": "We were at the wedding last week."
      },
      {
        "icon": "2",
        "title": "Birth",
        "text": "Use was born / were born to say when or where someone was born.",
        "example": "Leo was born in 2021."
      },
      {
        "icon": "3",
        "title": "Past questions",
        "text": "Put was / were before the subject in yes/no questions.",
        "example": "Were you born in London?"
      }
    ],
    "forms": [
      {
        "id": "positive",
        "icon": "+",
        "title": "Affirmative",
        "formula": "subject + was / were (+ born)",
        "example": "She was born in May. / They were at home.",
        "translation": "Она родилась в мае. / Они были дома.",
        "note": "Born follows was or were: was born, not just born."
      },
      {
        "id": "negative",
        "icon": "−",
        "title": "Negative",
        "formula": "subject + wasn’t / weren’t",
        "example": "I wasn’t born in 1990. / They weren’t at the wedding.",
        "translation": "Я не родился в 1990 году. / Их не было на свадьбе.",
        "note": "was not = wasn’t; were not = weren’t."
      },
      {
        "id": "question",
        "icon": "?",
        "title": "Questions",
        "formula": "Was / Were + subject (+ born) ...?",
        "example": "Where were you born? / Was she born in June?",
        "translation": "Где ты родился? / Она родилась в июне?",
        "note": "For questions, move was or were before the subject."
      },
      {
        "id": "short",
        "icon": "✓",
        "title": "Short answers",
        "formula": "Yes, I was. / No, I wasn’t. / Yes, they were. / No, they weren’t.",
        "example": "Were you born in 2004? Yes, I was.",
        "translation": "Ты родился в 2004 году? Да.",
        "note": "Do not say “Yes, I was born” as a short answer to a yes/no question."
      }
    ],
    "questionBuilder": {
      "title": "Word order for birth questions",
      "note": "Question word + was/were + person + born + place/time?",
      "pattern": [
        "Where",
        "were",
        "you",
        "born?"
      ],
      "example": "Where were you born?",
      "translation": "Где ты родился / родилась?"
    },
    "commonMistakes": [
      {
        "wrong": "She born in 2002.",
        "right": "She was born in 2002.",
        "reason": "Use was or were with born."
      },
      {
        "wrong": "They was born in 2000.",
        "right": "They were born in 2000.",
        "reason": "Use were with they."
      },
      {
        "wrong": "I was born on 2005.",
        "right": "I was born in 2005.",
        "reason": "Use in for a year or month; on for a date or day."
      },
      {
        "wrong": "Where you were born?",
        "right": "Where were you born?",
        "reason": "Use question word order: Where + were + you."
      }
    ],
    "quizExercises": [
      {
        "title": "Choose the past form",
        "instructions": "Choose was or were.",
        "items": [
          {
            "type": "single",
            "prompt": "I ___ born in July.",
            "options": [
              "was",
              "were",
              "am"
            ],
            "answer": 0
          },
          {
            "type": "single",
            "prompt": "My parents ___ born in different cities.",
            "options": [
              "was",
              "were",
              "is"
            ],
            "answer": 1
          },
          {
            "type": "single",
            "prompt": "He ___ at the wedding yesterday.",
            "options": [
              "were",
              "is",
              "was"
            ],
            "answer": 2
          },
          {
            "type": "single",
            "prompt": "___ you born in 2005?",
            "options": [
              "Are",
              "Was",
              "Were"
            ],
            "answer": 2
          }
        ]
      },
      {
        "title": "Write the correct form",
        "instructions": "Write was, were, wasn’t or weren’t.",
        "items": [
          {
            "type": "text",
            "prompt": "My sister ___ born in 2010.",
            "answer": "was"
          },
          {
            "type": "text",
            "prompt": "We ___ at home yesterday.",
            "answer": "were"
          },
          {
            "type": "text",
            "prompt": "I ___ born in 1900. That is impossible!",
            "answer": "wasn’t",
            "acceptedAnswers": [
              "wasn't",
              "was not"
            ]
          },
          {
            "type": "text",
            "prompt": "They ___ at the wedding. They were on holiday.",
            "answer": "weren’t",
            "acceptedAnswers": [
              "weren't",
              "were not"
            ]
          }
        ]
      },
      {
        "title": "Make correct questions",
        "instructions": "Choose the question with correct word order.",
        "items": [
          {
            "type": "select",
            "prompt": "Ask about a year of birth.",
            "options": [
              "When you were born?",
              "When were you born?",
              "When did you born?"
            ],
            "answer": 1
          },
          {
            "type": "select",
            "prompt": "Ask about a city of birth.",
            "options": [
              "Where was she born?",
              "Where she was born?",
              "Where is she born?"
            ],
            "answer": 0
          },
          {
            "type": "select",
            "prompt": "Ask if they were at the wedding.",
            "options": [
              "Were they at the wedding?",
              "Was they at the wedding?",
              "They were at the wedding?"
            ],
            "answer": 0
          },
          {
            "type": "select",
            "prompt": "Ask if your friend was born in 2004.",
            "options": [
              "Did you born in 2004?",
              "Were you born in 2004?",
              "Was you born in 2004?"
            ],
            "answer": 1
          }
        ]
      },
      {
        "title": "Build full sentences",
        "instructions": "Use the words to write a full correct sentence or question.",
        "items": [
          {
            "type": "reorder",
            "prompt": "she / born / 2002 / in / was",
            "tokens": [
              "she",
              "born",
              "2002",
              "in",
              "was"
            ],
            "answer": "She was born in 2002."
          },
          {
            "type": "reorder",
            "prompt": "were / you / born / where / ?",
            "tokens": [
              "were",
              "you",
              "born",
              "where",
              "?"
            ],
            "answer": "Where were you born?"
          },
          {
            "type": "reorder",
            "prompt": "not / at / we / were / the wedding",
            "tokens": [
              "not",
              "at",
              "we",
              "were",
              "the wedding"
            ],
            "answer": "We were not at the wedding.",
            "acceptedAnswers": [
              "We were not at the wedding.",
              "We weren't at the wedding."
            ]
          },
          {
            "type": "reorder",
            "prompt": "was / he / on / born / 7 May",
            "tokens": [
              "was",
              "he",
              "on",
              "born",
              "7 May"
            ],
            "answer": "He was born on 7 May."
          }
        ]
      }
    ]
  }
];
