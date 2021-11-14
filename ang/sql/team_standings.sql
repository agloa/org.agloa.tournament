
--
-- TABLE: team_standings
-- 
--  

CREATE TABLE team_standings (
  tournament varchar(64) NOT NULL ,
  competition varchar(64) NOT NULL ,
  place smallint NOT NULL ,
  award varchar(50) NOT NULL ,
  team varchar(64) NOT NULL ,
  scheduling_group varchar(64) NOT NULL ,
  players text NOT NULL 
);

-- 
ALTER TABLE team_standings ADD CONSTRAINT team_standings_primary_key PRIMARY KEY (tournament,competition,team);

-- CHECK Constraints are not supported in Mysql (as of version 5.x)
-- But it'll parse the statements without error 
