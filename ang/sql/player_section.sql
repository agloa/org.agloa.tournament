
--
-- TABLE: player_section
-- 
--  

CREATE TABLE player_section (
  player int(10) NOT NULL ,
  section varchar(20) COLLATE utf8_unicode_ci NOT NULL 
);

-- CHECK Constraints are not supported in Mysql (as of version 5.x)
-- But it'll parse the statements without error 
