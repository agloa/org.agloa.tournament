
--
-- TABLE: roster
-- 
--  

CREATE TABLE roster (
  team int(10) NOT NULL ,
  person int(10) NOT NULL ,
  role varchar(20) COLLATE utf8_unicode_ci DEFAULT 'player'
);

CREATE INDEX roster_team_index  ON roster(team);

CREATE INDEX roster_person_index  ON roster(person);

-- 
ALTER TABLE roster ADD CONSTRAINT team_person_fk FOREIGN KEY (team) REFERENCES team(id) ON UPDATE CASCADE ON DELETE CASCADE;

-- 
ALTER TABLE roster ADD CONSTRAINT person_team_fk FOREIGN KEY (person) REFERENCES person(id) ON UPDATE CASCADE ON DELETE CASCADE;

-- CHECK Constraints are not supported in Mysql (as of version 5.x)
-- But it'll parse the statements without error 
