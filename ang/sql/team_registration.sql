
--
-- TABLE: team_registration
-- 
--  

CREATE TABLE team_registration (
  id int(10) unsigned NOT NULL ,
  tournament varchar(20) NOT NULL ,
  scheduling_group_team int(10) unsigned NOT NULL ,
  status varchar(10) NOT NULL  DEFAULT Registered,
  registered_by int(10) NOT NULL ,
  registered_date datetime NOT NULL  DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX team_registration_id_index  ON team_registration(id);
ALTER TABLE team_registration CHANGE id id int unsigned  NOT NULL AUTO_INCREMENT ;

-- 
ALTER TABLE team_registration ADD CONSTRAINT team_registration_PK PRIMARY KEY (id);

CREATE INDEX team_registration_tournament_index  ON team_registration(tournament);

CREATE INDEX team_registration_index  ON team_registration();

CREATE INDEX team_registration_registered_by_index  ON team_registration(registered_by);

-- 
ALTER TABLE team_registration ADD CONSTRAINT team_registration_tournament FOREIGN KEY (tournament) REFERENCES tournament(id) ON UPDATE CASCADE ON DELETE CASCADE;

-- 
ALTER TABLE team_registration ADD CONSTRAINT tournament_scheduling_group_team FOREIGN KEY () REFERENCES scheduling_group_team() ON UPDATE CASCADE ON DELETE CASCADE;

-- 
ALTER TABLE team_registration ADD CONSTRAINT team_registration_registered_by FOREIGN KEY (registered_by) REFERENCES person(id) ON UPDATE CASCADE ON DELETE SET NULL;

-- CHECK Constraints are not supported in Mysql (as of version 5.x)
-- But it'll parse the statements without error 

CREATE INDEX team_registration_id_index  ON team_registration(id);

CREATE INDEX team_registration_tournament_index  ON team_registration(tournament);

CREATE INDEX team_registration_scheduling_group_team_index  ON team_registration(scheduling_group_team);

CREATE INDEX team_registration_registered_by_index  ON team_registration(registered_by);
