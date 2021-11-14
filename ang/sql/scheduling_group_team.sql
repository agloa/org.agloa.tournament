
--
-- TABLE: scheduling_group_team
-- 
--  

CREATE TABLE scheduling_group_team (
  scheduling_group varchar(20) COLLATE utf8_unicode_ci NOT NULL ,
  team int(10) NOT NULL ,
  status varchar(8) COLLATE utf8_unicode_ci DEFAULT '',
  id int(10) unsigned NOT NULL 
);

CREATE INDEX scheduling_group_team_id_index  ON scheduling_group_team(id);
ALTER TABLE scheduling_group_team CHANGE id id int unsigned  NOT NULL AUTO_INCREMENT ;

-- 
ALTER TABLE scheduling_group_team ADD CONSTRAINT new_unique_constraint PRIMARY KEY (scheduling_group,team);

CREATE INDEX scheduling_group_team_scheduling_group_index  ON scheduling_group_team(scheduling_group);

CREATE INDEX scheduling_group_team_team_index  ON scheduling_group_team(team);

-- 
ALTER TABLE scheduling_group_team ADD CONSTRAINT scheduling_group_team_fk FOREIGN KEY (scheduling_group) REFERENCES scheduling_group(id) ON UPDATE CASCADE ON DELETE CASCADE;

-- 
ALTER TABLE scheduling_group_team ADD CONSTRAINT team_scheduling_group_fk FOREIGN KEY (team) REFERENCES team(id) ON UPDATE CASCADE ON DELETE CASCADE;

-- CHECK Constraints are not supported in Mysql (as of version 5.x)
-- But it'll parse the statements without error 

CREATE INDEX scheduling_group_team_id_index  ON scheduling_group_team(id);
