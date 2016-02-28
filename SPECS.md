# Specs for Backlogr

##Tool setup

* Use Typescript
* Use Mocca and Chai for Unittests
** npm install -g mocha chai
* Use Angular for the frontend stuff

## Model Layout

The section describes the database model layer

### User

pass

### Project
Is made out of a

* project name
* project description
* optional data
* timestamp for created_on and updated_on
pass

### Backlog
Is made out of a
* reference to a project
* a name
* a description
* a product owner name (optional) -> Could be an adiitional model


### Epic
Is made out of:
* Reference to a backlog
* name
* ID
* Description
* Priorization Status --> Should be a customizable Model



### User Stories
Is made out of:
* Reference to an Epic
* ID
* name
pass


### Acceptance Criteria
pass

### Functional Specs
pass
