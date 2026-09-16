# Alexandra English Space

Student: Alexandra  
Level: A1  
Coursebook: Speakout A1

## Content

The project is a clean copy of the learning-site architecture with no active homework transferred from another student.

Published homework files should be added to `data/lessons/` as `lesson-1.json`, `lesson-2.json`, and so on, then listed in `data/lessons/index.json`. Every new homework must set `notification.enabled` to `true`.

Vocabulary topics go in `data/vocabulary-data.js`.

Grammar topics go in `data/grammar-data.js`.

All student-facing text should stay in English at A1 level.

## Telegram

The requested Telegram topic is:

`https://t.me/c/4296247502/5`

For Telegram Bot API / Supabase setup this means:

`chat_id = -1004296247502`

`message_thread_id = 5`

Run `supabase/telegram-notifications-alexandra.sql` in Supabase SQL Editor. It creates or updates the `telegram_recipients` row for `student_id = 'alexandra'`.

Reports do not include the student's name. New-homework notifications and completed-homework reports both end with a motivational phrase.
