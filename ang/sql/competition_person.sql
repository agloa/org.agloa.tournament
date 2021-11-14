
--
-- TABLE: competition_person
-- 
--  

CREATE TABLE competition_person (
  competition varchar NOT NULL ,
  tournament_person int(10) unsigned NOT NULL ,
  status varchar NOT NULL  DEFAULT Registered,
  role varchar NOT NULL  DEFAULT player,
  registered_by int NOT NULL ,
  registered_date datetime NOT NULL  DEFAULT CURRENT_TIMESTAMP
);

-- 
ALTER TABLE competition_person ADD CONSTRAINT competition_person_PK UNIQUE (competition);

CREATE INDEX competition_person_tournament_person_index  ON competition_person(tournament_person);

CREATE INDEX competition_person_competition_index  ON competition_person(competition);

-- 
ALTER TABLE competition_person ADD CONSTRAINT tournament_person_fk FOREIGN KEY (tournament_person) REFERENCES tournament_person(id) ON UPDATE CASCADE ON DELETE CASCADE;

-- 
ALTER TABLE competition_person ADD CONSTRAINT competition_person_competition_fk FOREIGN KEY (competition) REFERENCES competition(id) ON UPDATE CASCADE ON DELETE CASCADE;

-- CHECK Constraints are not supported in Mysql (as of version 5.x)
-- But it'll parse the statements without error 

CREATE INDEX competition_person_competition_index  ON competition_person(competition);

CREATE INDEX competition_person_tournament_person_index  ON competition_person(tournament_person);
