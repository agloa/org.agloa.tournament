
--
-- TABLE: competition_style_award
-- 
--  

CREATE TABLE competition_style_award (
  competition_style varchar(20) NOT NULL ,
  is_team_competition_award bit,
  max_place smallint,
  award varchar(32) NOT NULL ,
  quantity int NOT NULL  DEFAULT 1,
  min_score smallint,
  min_rounds tinyint
);

CREATE INDEX competition_style_award_award_index  ON competition_style_award(award);

CREATE INDEX competition_style_award_competition_style_index  ON competition_style_award(competition_style);

-- 
ALTER TABLE competition_style_award ADD CONSTRAINT competition_style_award_award FOREIGN KEY (award) REFERENCES award(name) ON UPDATE CASCADE ON DELETE CASCADE;

-- 
ALTER TABLE competition_style_award ADD CONSTRAINT competition_style_award_style FOREIGN KEY (competition_style) REFERENCES competition_style(id) ON UPDATE CASCADE ON DELETE CASCADE;

-- CHECK Constraints are not supported in Mysql (as of version 5.x)
-- But it'll parse the statements without error 
