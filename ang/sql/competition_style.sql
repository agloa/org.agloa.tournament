
--
-- TABLE: competition_style
-- 
--  

CREATE TABLE competition_style (
  id varchar(20) NOT NULL ,
  name varchar(512) NOT NULL ,
  label varchar(512) NOT NULL 
);

-- 
ALTER TABLE competition_style ADD CONSTRAINT competition_style_pk PRIMARY KEY (id);

-- CHECK Constraints are not supported in Mysql (as of version 5.x)
-- But it'll parse the statements without error 

CREATE INDEX competition_style_id_index  ON competition_style(id);
