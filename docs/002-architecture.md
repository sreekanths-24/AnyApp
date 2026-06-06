# ADR-002: System Architecture

Date: 2026-06-06

## Status

Accepted

## Context

AnyApp must generate and execute applications created by AI.

Generated applications cannot be trusted and must execute safely.

## Decision

Use a sandboxed runtime architecture.

Flow:

User Prompt
↓
Backend API
↓
AI Generation Service
↓
HTML + CSS + JavaScript
↓
Sandbox Runtime
↓
Running Application

Generated applications will never execute directly against the host operating system.

Applications will be isolated inside a sandbox environment.

## Runtime Responsibilities

* Render generated applications
* Execute generated JavaScript
* Isolate applications
* Prevent unauthorized access
* Manage application lifecycle

## Security Model

Allowed:

* Forms
* Calculations
* Local state
* Canvas rendering
* Internal application logic

Blocked:

* Native code execution
* Arbitrary file access
* Contacts access
* SMS access
* Device administration
* Background processes

## Future Considerations

Potential permission system:

* File Picker API
* Camera API
* Microphone API

These capabilities will only be introduced after a secure permission model is established.
