
--
-- TABLE: competition_section_player
-- 
--  

CREATE TABLE competition_section_player (
  competition_section varchar(20) NOT NULL ,
  player int(10) unsigned NOT NULL 
);

-- 
ALTER TABLE competition_section_player ADD CONSTRAINT competition_section_player_pk PRIMARY KEY (competition_section,player);

CREATE INDEX competition_section_player_competition_section_index  ON competition_section_player(competition_section);

CREATE INDEX competition_section_player_player_index  ON competition_section_player(player);

-- 
ALTER TABLE competition_section_player ADD CONSTRAINT competition_section_player_section_fk FOREIGN KEY (competition_section) REFERENCES competition_section(id) ON UPDATE CASCADE ON DELETE CASCADE;

-- 
ALTER TABLE competition_section_player ADD CONSTRAINT competition_section_competition_player_fk FOREIGN KEY (player) REFERENCES competition_person(tournament_person) ON UPDATE CASCADE ON DELETE CASCADE;

-- CHECK Constraints are not supported in Mysql (as of version 5.x)
-- But it'll parse the statements without error 

CREATE INDEX competition_section_player_competition_section_index  ON competition_section_player(competition_section);

CREATE INDEX competition_section_player_player_index  ON competition_section_player(player);
