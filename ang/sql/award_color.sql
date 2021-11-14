
--
-- TABLE: award_color
-- 
--  

CREATE TABLE award_color (
  id varchar(32) NOT NULL 
);

-- 
ALTER TABLE award_color ADD CONSTRAINT new_unique_constraint PRIMARY KEY (id);

-- CHECK Constraints are not supported in Mysql (as of version 5.x)
-- But it'll parse the statements without error 

CREATE INDEX award_color_id_index  ON award_color(id);
