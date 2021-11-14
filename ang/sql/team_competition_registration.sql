
--
-- TABLE: team_competition_registration
-- 
--  

CREATE TABLE team_competition_registration (
  competition varchar(50) NOT NULL ,
  team_registration int(10) unsigned NOT NULL ,
  status varchar NOT NULL  DEFAULT Registered,
  registered_by int unsigned NOT NULL ,
  registered_date datetime NOT NULL  DEFAULT CURRENT_TIMESTAMP
);

-- 
ALTER TABLE team_competition_registration ADD CONSTRAINT team_competition_registration_PK UNIQUE (competition,team_registration);

CREATE INDEX team_competition_registration_team_registration_index  ON team_competition_registration(team_registration);

-- 
ALTER TABLE team_competition_registration ADD CONSTRAINT tournament_person_fk FOREIGN KEY (team_registration) REFERENCES team_registration(id) ON UPDATE CASCADE ON DELETE CASCADE;

-- CHECK Constraints are not supported in Mysql (as of version 5.x)
-- But it'll parse the statements without error 

CREATE INDEX team_competition_registration_competition_index  ON team_competition_registration(competition);

CREATE INDEX team_competition_registration_team_registration_index  ON team_competition_registration(team_registration);

CREATE INDEX team_competition_registration_registered_by_index  ON team_competition_registration(registered_by);
