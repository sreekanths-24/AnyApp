# ADR-003: Technology Stack

Date: 2026-06-06

## Status

Accepted

## Context

The project should maximize learning while remaining maintainable for a solo developer.

Goals:

* Learn modern frontend development
* Learn backend architecture
* Learn DevOps
* Learn containerization
* Learn AI integration

## Decision

### Frontend

React

Reasons:

* Large ecosystem
* Industry adoption
* Component-based architecture
* Strong AI tooling support

### Language

TypeScript

Reasons:

* Better maintainability
* Strong typing
* Reduced runtime errors

### Backend

Symfony

Reasons:

* Enterprise-grade architecture
* Dependency Injection
* Event-driven capabilities
* Excellent learning opportunity

### Database

PostgreSQL

Reasons:

* Strong relational database
* Excellent JSON support
* Production proven

### Cache

Redis

Reasons:

* Fast caching
* Session storage
* Future scalability

### Queue System

RabbitMQ

Reasons:

* Background AI generation
* Async processing
* Distributed system learning

### Containerization

Docker

Reasons:

* Consistent environments
* Easier deployment
* Industry standard

### Reverse Proxy

Nginx

Reasons:

* Performance
* SSL termination
* Routing

### CI/CD

GitHub Actions

Reasons:

* Native GitHub integration
* Automated testing
* Automated deployment

### AI Provider

Provider abstraction pattern.

Initial providers:

* OpenAI
* Google Gemini

The application should not be tightly coupled to a single AI vendor.

## Consequences

Benefits:

* Modern stack
* Strong learning opportunities
* Production-ready architecture

Tradeoffs:

* Higher complexity than beginner frameworks
* Longer learning curve
