# Cron Expression Parser
A simple and efficient Node.js-based cron expression parser that expands a cron string into its corresponding time values.
Useful for task schedulers, automation systems, cron validators.


🚀 Features

- Parses 5-field standard cron expressions
- Supports:
    - *— wildcard
    - ,— multiple values
    - -— ranges
    - /— steps

- Outputs expanded values for:

  - Minute
  - Hour
  - Day of Month
  - Month
  - Day of Week

- Fully written in JavaScript (module)

📘 For example, the following input argument:

   - */15 0 1,15 * 1-5 /usr/bin/find

📤 Should yield the following output:

  - minute 0 15 30 45
  - hour 0
  - day of month 1 15
  - month 1 2 3 4 5 6 7 8 9 10 11 12
  - day of week 1 2 3 4 5
  - command /usr/bin/find


📦 Installation

git clone https://github.com/your-username/cron-parser.git
cd Cron-Parser
npm install
