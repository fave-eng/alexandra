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
  },
  {
    "id": "articles-a-an-a1",
    "linkedLessonId": "lesson-5",
    "order": 5,
    "title": "Articles: a / an",
    "level": "A1",
    "status": "available",
    "page": "grammar-topic.html?id=articles-a-an-a1",
    "passScore": 100,
    "overview": {
      "lead": "Use a or an before one singular countable noun when you do not mean a specific item. Choose by sound, not by spelling. There is no a/an before plural nouns.",
      "keyRule": "a + consonant sound · an + vowel sound",
      "example": "a laptop · an umbrella · a university · an hour",
      "subjects": [
        "a phone",
        "an apple",
        "plural: phones (no article)"
      ]
    },
    "uses": [
      {
        "icon": "1",
        "title": "One thing",
        "text": "Use a/an with one countable thing.",
        "example": "I have a purse."
      },
      {
        "icon": "2",
        "title": "Vowel sounds",
        "text": "Use an before a vowel sound.",
        "example": "She has an umbrella."
      },
      {
        "icon": "3",
        "title": "Listen to the first sound",
        "text": "a university starts with /j/; an hour has a silent h.",
        "example": "a university · an hour"
      }
    ],
    "forms": [
      {
        "id": "positive",
        "icon": "+",
        "title": "Affirmative",
        "formula": "subject + verb + a/an + singular noun",
        "example": "I have a bag.",
        "translation": "У меня есть сумка.",
        "note": "a before consonant sounds; an before vowel sounds."
      },
      {
        "id": "negative",
        "icon": "−",
        "title": "Negative",
        "formula": "subject + do/does not + have + a/an + singular noun",
        "example": "I don’t have an umbrella.",
        "translation": "У меня нет зонта.",
        "note": "The article stays with the singular noun."
      },
      {
        "id": "question",
        "icon": "?",
        "title": "Questions",
        "formula": "Do/Does + subject + have + a/an + noun?",
        "example": "Do you have a passport?",
        "translation": "У тебя есть паспорт?",
        "note": "The article does not move to the start of the question."
      },
      {
        "id": "short",
        "icon": "✓",
        "title": "Short answers",
        "formula": "Yes, I do. / No, I don’t.",
        "example": "Do you have a bag? Yes, I do.",
        "translation": "Есть ли у тебя сумка? Да.",
        "note": "Do/does answers do not repeat a/an."
      }
    ],
    "questionBuilder": {
      "title": "A / an in questions",
      "note": "Choose a/an according to the next spoken sound, including in questions.",
      "pattern": [
        "Do you have",
        "an",
        "umbrella?"
      ],
      "example": "Do you have an umbrella?",
      "translation": "У тебя есть зонт?"
    },
    "commonMistakes": [
      {
        "wrong": "an phone",
        "right": "a phone",
        "reason": "phone begins with a consonant sound."
      },
      {
        "wrong": "a apple",
        "right": "an apple",
        "reason": "apple begins with a vowel sound."
      },
      {
        "wrong": "an university",
        "right": "a university",
        "reason": "university begins with the consonant /j/ sound."
      },
      {
        "wrong": "a phones",
        "right": "phones",
        "reason": "Do not use a/an with plural nouns."
      }
    ],
    "quizExercises": [
      {
        "title": "Choose the correct form",
        "instructions": "Choose the correct answer.",
        "items": [
          {
            "type": "single",
            "prompt": "I have ___ umbrella.",
            "answer": 1,
            "options": [
              "a",
              "an"
            ]
          },
          {
            "type": "single",
            "prompt": "She has ___ laptop.",
            "answer": 0,
            "options": [
              "a",
              "an"
            ]
          },
          {
            "type": "single",
            "prompt": "He has ___ American passport.",
            "answer": 1,
            "options": [
              "a",
              "an"
            ]
          },
          {
            "type": "single",
            "prompt": "We have ___ wallet.",
            "answer": 0,
            "options": [
              "a",
              "an"
            ]
          }
        ]
      },
      {
        "title": "Write the missing word",
        "instructions": "Write the correct word.",
        "items": [
          {
            "type": "text",
            "prompt": "It is ___ apple.",
            "answer": "an"
          },
          {
            "type": "text",
            "prompt": "This is ___ country.",
            "answer": "a"
          },
          {
            "type": "text",
            "prompt": "She is ___ actor.",
            "answer": "an"
          },
          {
            "type": "text",
            "prompt": "I have ___ mobile phone.",
            "answer": "a"
          }
        ]
      },
      {
        "title": "Use the rule in context",
        "instructions": "Choose the correct sentence or phrase.",
        "items": [
          {
            "type": "select",
            "prompt": "Which is correct?",
            "answer": 1,
            "options": [
              "an university",
              "a university",
              "an phones"
            ]
          },
          {
            "type": "select",
            "prompt": "Choose the correct noun phrase.",
            "answer": 0,
            "options": [
              "an hour",
              "a hour",
              "a hours"
            ]
          },
          {
            "type": "select",
            "prompt": "Which sentence is correct?",
            "answer": 2,
            "options": [
              "I have a apples.",
              "I have an apples.",
              "I have apples."
            ]
          },
          {
            "type": "select",
            "prompt": "Which is correct?",
            "answer": 1,
            "options": [
              "a office worker",
              "an office worker",
              "an bag"
            ]
          }
        ]
      },
      {
        "title": "Build sentences and questions",
        "instructions": "Put the words in the correct order.",
        "items": [
          {
            "type": "reorder",
            "prompt": "have / an / I / umbrella",
            "answer": "I have an umbrella.",
            "tokens": [
              "have",
              "an",
              "I",
              "umbrella"
            ]
          },
          {
            "type": "reorder",
            "prompt": "a / she / has / laptop",
            "answer": "She has a laptop.",
            "tokens": [
              "a",
              "she",
              "has",
              "laptop"
            ]
          },
          {
            "type": "reorder",
            "prompt": "you / have / an / do / apple / ?",
            "answer": "Do you have an apple?",
            "tokens": [
              "you",
              "have",
              "an",
              "do",
              "apple",
              "?"
            ]
          },
          {
            "type": "reorder",
            "prompt": "passport / a / have / they",
            "answer": "They have a passport.",
            "tokens": [
              "passport",
              "a",
              "have",
              "they"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "plural-nouns-a1",
    "linkedLessonId": "lesson-5",
    "order": 6,
    "title": "Singular and plural nouns",
    "level": "A1",
    "status": "available",
    "page": "grammar-topic.html?id=plural-nouns-a1",
    "passScore": 100,
    "overview": {
      "lead": "Use the singular form for one object and the plural form for two or more. Most nouns add -s, but some change their spelling.",
      "keyRule": "1 bag → 2 bags · 1 sandwich → 2 sandwiches · 1 country → 2 countries",
      "example": "I have one purse. We have two purses.",
      "subjects": [
        "one phone",
        "two phones",
        "two countries"
      ]
    },
    "uses": [
      {
        "icon": "1",
        "title": "Add -s",
        "text": "Most plural nouns add -s.",
        "example": "bag → bags"
      },
      {
        "icon": "2",
        "title": "Add -es",
        "text": "After s, sh, ch, x, add -es.",
        "example": "sandwich → sandwiches"
      },
      {
        "icon": "3",
        "title": "Change y to ies",
        "text": "Consonant + y changes to -ies; vowel + y adds -s.",
        "example": "country → countries; key → keys"
      }
    ],
    "forms": [
      {
        "id": "positive",
        "icon": "+",
        "title": "Affirmative",
        "formula": "number + plural noun",
        "example": "I have three wallets.",
        "translation": "У меня три кошелька.",
        "note": "No a/an with a plural noun."
      },
      {
        "id": "negative",
        "icon": "−",
        "title": "Negative",
        "formula": "do/does not + have + plural noun",
        "example": "I don’t have laptops.",
        "translation": "У меня нет ноутбуков.",
        "note": "Nouns are plural when more than one is meant."
      },
      {
        "id": "question",
        "icon": "?",
        "title": "Questions",
        "formula": "How many + plural noun + ... ?",
        "example": "How many phones do you have?",
        "translation": "Сколько у тебя телефонов?",
        "note": "Use the plural after how many."
      },
      {
        "id": "short",
        "icon": "✓",
        "title": "Short answers",
        "formula": "number + plural noun",
        "example": "Two phones.",
        "translation": "Два телефона.",
        "note": "Singular after one, plural after two or more."
      }
    ],
    "questionBuilder": {
      "title": "How many ...?",
      "note": "After how many, use the plural noun.",
      "pattern": [
        "How many",
        "mobile phones",
        "do you have?"
      ],
      "example": "How many mobile phones do you have?",
      "translation": "Сколько у тебя мобильных телефонов?"
    },
    "commonMistakes": [
      {
        "wrong": "two country",
        "right": "two countries",
        "reason": "Consonant + y changes to -ies."
      },
      {
        "wrong": "three sandwichs",
        "right": "three sandwiches",
        "reason": "After ch, add -es."
      },
      {
        "wrong": "two keyes",
        "right": "two keys",
        "reason": "After vowel + y, add -s."
      },
      {
        "wrong": "two childs",
        "right": "two children",
        "reason": "Child → children is irregular."
      }
    ],
    "quizExercises": [
      {
        "title": "Choose the correct form",
        "instructions": "Choose the correct answer.",
        "items": [
          {
            "type": "single",
            "prompt": "two ___",
            "answer": 1,
            "options": [
              "purse",
              "purses"
            ]
          },
          {
            "type": "single",
            "prompt": "three ___",
            "answer": 0,
            "options": [
              "laptops",
              "laptop"
            ]
          },
          {
            "type": "single",
            "prompt": "two ___",
            "answer": 1,
            "options": [
              "country",
              "countries"
            ]
          },
          {
            "type": "single",
            "prompt": "four ___",
            "answer": 0,
            "options": [
              "sandwiches",
              "sandwichs"
            ]
          }
        ]
      },
      {
        "title": "Write the missing word",
        "instructions": "Write the correct word.",
        "items": [
          {
            "type": "text",
            "prompt": "One wallet → two ___.",
            "answer": "wallets"
          },
          {
            "type": "text",
            "prompt": "One phone → three ___.",
            "answer": "phones"
          },
          {
            "type": "text",
            "prompt": "One country → two ___.",
            "answer": "countries"
          },
          {
            "type": "text",
            "prompt": "One box → two ___.",
            "answer": "boxes"
          }
        ]
      },
      {
        "title": "Use the rule in context",
        "instructions": "Choose the correct sentence or phrase.",
        "items": [
          {
            "type": "select",
            "prompt": "Choose the correct sentence.",
            "answer": 0,
            "options": [
              "I have two bags.",
              "I have two bag.",
              "I have a two bags."
            ]
          },
          {
            "type": "select",
            "prompt": "Choose the correct phrase.",
            "answer": 1,
            "options": [
              "three babys",
              "three babies",
              "three babyes"
            ]
          },
          {
            "type": "select",
            "prompt": "Choose the correct phrase.",
            "answer": 2,
            "options": [
              "two childs",
              "two childrens",
              "two children"
            ]
          },
          {
            "type": "select",
            "prompt": "Choose the correct question.",
            "answer": 1,
            "options": [
              "How many phone do you have?",
              "How many phones do you have?",
              "How much phones do you have?"
            ]
          }
        ]
      },
      {
        "title": "Build sentences and questions",
        "instructions": "Put the words in the correct order.",
        "items": [
          {
            "type": "reorder",
            "prompt": "two / have / I / wallets",
            "answer": "I have two wallets.",
            "tokens": [
              "two",
              "have",
              "I",
              "wallets"
            ]
          },
          {
            "type": "reorder",
            "prompt": "has / she / three / keys",
            "answer": "She has three keys.",
            "tokens": [
              "has",
              "she",
              "three",
              "keys"
            ]
          },
          {
            "type": "reorder",
            "prompt": "many / have / how / phones / you / do / ?",
            "answer": "How many phones do you have?",
            "tokens": [
              "many",
              "have",
              "how",
              "phones",
              "you",
              "do",
              "?"
            ]
          },
          {
            "type": "reorder",
            "prompt": "in / there / are / my / two / sandwiches / bag",
            "answer": "There are two sandwiches in my bag.",
            "tokens": [
              "in",
              "there",
              "are",
              "my",
              "two",
              "sandwiches",
              "bag"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "have-has-a1",
    "linkedLessonId": "lesson-5",
    "order": 7,
    "title": "Have / has",
    "level": "A1",
    "status": "available",
    "page": "grammar-topic.html?id=have-has-a1",
    "passScore": 100,
    "overview": {
      "lead": "Use have and has to talk about what people own or carry. Have is used with I, you, we and they; has with he, she and it.",
      "keyRule": "I / you / we / they → have · he / she / it → has",
      "example": "I have a mobile phone. She has a laptop.",
      "subjects": [
        "I have",
        "you have",
        "he / she / it has"
      ]
    },
    "uses": [
      {
        "icon": "1",
        "title": "Talk about your things",
        "text": "Say what is in your bag or what you own.",
        "example": "I have two keys."
      },
      {
        "icon": "2",
        "title": "Talk about one person",
        "text": "Use has with he/she/it or a person’s name.",
        "example": "Ralph has a wallet."
      },
      {
        "icon": "3",
        "title": "Ask about possessions",
        "text": "Use do/does in questions and do not use has after does.",
        "example": "Does she have a laptop?"
      }
    ],
    "forms": [
      {
        "id": "positive",
        "icon": "+",
        "title": "Affirmative",
        "formula": "subject + have / has + object",
        "example": "I have a bag. She has a phone.",
        "translation": "У меня есть сумка. У неё есть телефон.",
        "note": "Use has with he/she/it."
      },
      {
        "id": "negative",
        "icon": "−",
        "title": "Negative",
        "formula": "subject + don’t/doesn’t + have + object",
        "example": "I don’t have a laptop. He doesn’t have a wallet.",
        "translation": "У меня нет ноутбука. У него нет кошелька.",
        "note": "After doesn’t, use have, not has."
      },
      {
        "id": "question",
        "icon": "?",
        "title": "Questions",
        "formula": "Do/Does + subject + have + object?",
        "example": "Do you have a phone? Does she have a bag?",
        "translation": "У тебя есть телефон? У неё есть сумка?",
        "note": "Use have after do and does."
      },
      {
        "id": "short",
        "icon": "✓",
        "title": "Short answers",
        "formula": "Yes, I do. / No, she doesn’t.",
        "example": "Does he have keys? Yes, he does.",
        "translation": "Есть ли у него ключи? Да.",
        "note": "Avoid Yes, he has as a short answer to Does he have ...?"
      }
    ],
    "questionBuilder": {
      "title": "Question order",
      "note": "Start with Do or Does, then the subject, then have.",
      "pattern": [
        "Does",
        "Yolanda",
        "have",
        "two phones?"
      ],
      "example": "Does Yolanda have two phones?",
      "translation": "У Иоланды два телефона?"
    },
    "commonMistakes": [
      {
        "wrong": "She have a purse.",
        "right": "She has a purse.",
        "reason": "Use has with she."
      },
      {
        "wrong": "He doesn’t has a wallet.",
        "right": "He doesn’t have a wallet.",
        "reason": "Use have after doesn’t."
      },
      {
        "wrong": "Does he has a laptop?",
        "right": "Does he have a laptop?",
        "reason": "After does, use have."
      },
      {
        "wrong": "We has two bags.",
        "right": "We have two bags.",
        "reason": "Use have with we."
      }
    ],
    "quizExercises": [
      {
        "title": "Choose the correct form",
        "instructions": "Choose the correct answer.",
        "items": [
          {
            "type": "single",
            "prompt": "Ralph ___ a wallet.",
            "answer": 1,
            "options": [
              "have",
              "has"
            ]
          },
          {
            "type": "single",
            "prompt": "I ___ two mobile phones.",
            "answer": 0,
            "options": [
              "have",
              "has"
            ]
          },
          {
            "type": "single",
            "prompt": "They ___ an umbrella.",
            "answer": 0,
            "options": [
              "have",
              "has"
            ]
          },
          {
            "type": "single",
            "prompt": "She ___ a laptop.",
            "answer": 1,
            "options": [
              "have",
              "has"
            ]
          }
        ]
      },
      {
        "title": "Write the missing word",
        "instructions": "Write the correct word.",
        "items": [
          {
            "type": "text",
            "prompt": "We ___ a bottle of water.",
            "answer": "have"
          },
          {
            "type": "text",
            "prompt": "Teri ___ a phone.",
            "answer": "has"
          },
          {
            "type": "text",
            "prompt": "___ your brother have keys?",
            "answer": "Does"
          },
          {
            "type": "text",
            "prompt": "He doesn’t ___ a passport.",
            "answer": "have"
          }
        ]
      },
      {
        "title": "Use the rule in context",
        "instructions": "Choose the correct sentence or phrase.",
        "items": [
          {
            "type": "select",
            "prompt": "Choose the correct sentence.",
            "answer": 1,
            "options": [
              "She have a phone.",
              "She has a phone.",
              "She haves a phone."
            ]
          },
          {
            "type": "select",
            "prompt": "Which is correct?",
            "answer": 0,
            "options": [
              "Does he have a wallet?",
              "Does he has a wallet?",
              "Do he have a wallet?"
            ]
          },
          {
            "type": "select",
            "prompt": "Which is correct?",
            "answer": 2,
            "options": [
              "He doesn’t has a laptop.",
              "He don’t have a laptop.",
              "He doesn’t have a laptop."
            ]
          },
          {
            "type": "select",
            "prompt": "Choose the correct short answer to “Does she have keys?”",
            "answer": 1,
            "options": [
              "Yes, she have.",
              "Yes, she does.",
              "Yes, she has."
            ]
          }
        ]
      },
      {
        "title": "Build sentences and questions",
        "instructions": "Put the words in the correct order.",
        "items": [
          {
            "type": "reorder",
            "prompt": "a / has / she / bag",
            "answer": "She has a bag.",
            "tokens": [
              "a",
              "has",
              "she",
              "bag"
            ]
          },
          {
            "type": "reorder",
            "prompt": "we / two / have / phones",
            "answer": "We have two phones.",
            "tokens": [
              "we",
              "two",
              "have",
              "phones"
            ]
          },
          {
            "type": "reorder",
            "prompt": "has / Ralph / two / cards",
            "answer": "Ralph has two cards.",
            "tokens": [
              "has",
              "Ralph",
              "two",
              "cards"
            ]
          },
          {
            "type": "reorder",
            "prompt": "does / she / a / have / wallet / ?",
            "answer": "Does she have a wallet?",
            "tokens": [
              "does",
              "she",
              "a",
              "have",
              "wallet",
              "?"
            ]
          }
        ]
      }
    ]
  }
];
