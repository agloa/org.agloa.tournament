
--
-- TABLE: tournament_person
-- 
--  

CREATE TABLE tournament_person (
  id int(10) unsigned NOT NULL ,
  tournament varchar(20) NOT NULL ,
  registration_group_person int(10) unsigned NOT NULL ,
  status varchar(10) NOT NULL  DEFAULT Registered,
  primary_role varchar(128) NOT NULL ,
  registered_by int(10) NOT NULL ,
  registered_date datetime NOT NULL  DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX tournament_person_id_index  ON tournament_person(id);
ALTER TABLE tournament_person CHANGE id id int unsigned  NOT NULL AUTO_INCREMENT ;

-- 
ALTER TABLE tournament_person ADD CONSTRAINT tournament_person_PK PRIMARY KEY (id);

CREATE INDEX tournament_person_tournament_index  ON tournament_person(tournament);

CREATE INDEX tournament_person_registration_group_person_index  ON tournament_person(registration_group_person);

CREATE INDEX tournament_person_registered_by_index  ON tournament_person(registered_by);

-- 
ALTER TABLE tournament_person ADD CONSTRAINT tournament_person_tournament FOREIGN KEY (tournament) REFERENCES tournament(id) ON UPDATE CASCADE ON DELETE CASCADE;

-- 
ALTER TABLE tournament_person ADD CONSTRAINT tournament_registration_group_person FOREIGN KEY (registration_group_person) REFERENCES registration_group_person(id) ON UPDATE CASCADE ON DELETE CASCADE;

-- 
ALTER TABLE tournament_person ADD CONSTRAINT new_fkey_constraint_2 FOREIGN KEY (registered_by) REFERENCES person(id) ON UPDATE CASCADE ON DELETE SET NULL;

-- CHECK Constraints are not supported in Mysql (as of version 5.x)
-- But it'll parse the statements without error 

CREATE INDEX tournament_person_id_index  ON tournament_person(id);

CREATE INDEX tournament_person_tournament_index  ON tournament_person(tournament);

CREATE INDEX tournament_person_registration_group_person_index  ON tournament_person(registration_group_person);

CREATE INDEX tournament_person_registered_by_index  ON tournament_person(registered_by);
