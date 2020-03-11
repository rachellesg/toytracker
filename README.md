# Toy Tracker

![logo](/public/small-logo.png)

**[Visit >> Heroku](http://google.com/)**

## The App

XX

## Problem Statement

[Companies] need [a better way to find suitable candidates] to [be able to more efficiently find the correct candidate with the relevant skills]

[Candidates] should be able to [apply for relevant jobs] to [increase chances of being hired]

### How It Works

- Tech recruiters or companies will be able to:
  - Post job listings
  - Screen relevant candidates for respective listings
  - Reach out to candidates after you get LINKD via our in-app chat system or by direct email

- Candidates will be able to:
  - View relevant job listings
  - Express interest in jobs
  - Sit back and wait for companies to approach!


## Installation Instructions
Linkdr requires PostgreSQL 10.5 and Redis 5.0.7 to be installed globally
```
bundle install
rails db:create
rails db:migrate
rails db:seed
rails server
redis-server
```


### APIs
- **[Cloudinary](https://cloudinary.com/)** - File hosting & upload
- **[Gravatar](https://en.gravatar.com/)** - User/candidate avatars

## Application Development Process
### Built With
- **[Ruby 2.5.1](https://www.ruby-lang.org/en/)** - Main Language
- **[Rails 5.2.4.1](https://rubyonrails.org)** - Backend Framework
- **[PostgreSQL 10.5](https://www.postgresql.org/)** - SQL Database
- **[Redis 5.0.7](https://redis.io/)** - Chat/Messaging Database
- **[Bootstrap](https://getbootstrap.com/)** - Frontend Framework
  
## Documentation

- **[Brainstorming](/source/brainstorming.jpg)**
- **[User Flow](/source/user_flow_whiteboard.jpg)**
- **[ERD](/source/matches_table_erd.jpg)**
- **[Team Meeting](/source/team_meeting.jpg)**
- **[Personas](/source/user_persona_janice_whiteboard.jpg)**

## Acknowledgements

- **[Art Illustrations](https://mixkit.co/free-stock-art/)**
- **[Icons](https://material.io/resources/icons/?style=baseline)**
