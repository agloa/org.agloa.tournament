
--
-- TABLE: team_player_competition_type
-- 
--  

CREATE TABLE team_player_competition_type (
  team_id int(11) NOT NULL ,
  player_id int(11) NOT NULL ,
  competition_type varchar(16) NOT NULL 
);

-- CHECK Constraints are not supported in Mysql (as of version 5.x)
-- But it'll parse the statements without error 
