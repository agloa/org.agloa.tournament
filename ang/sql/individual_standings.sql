
--
-- TABLE: individual_standings
-- Data mart for awards ceremony presentations.
--  

CREATE TABLE individual_standings (
  tournament varchar(20) NOT NULL ,
  competition varchar(50) NOT NULL ,
  place smallint NOT NULL ,
  award varchar(50) NOT NULL ,
  player varchar(128) NOT NULL ,
  registration_group varchar(64),
  team varchar(64)
);

-- 
ALTER TABLE individual_standings ADD CONSTRAINT individual_standings_primary_key PRIMARY KEY (tournament,competition,player);

-- CHECK Constraints are not supported in Mysql (as of version 5.x)
-- But it'll parse the statements without error 
