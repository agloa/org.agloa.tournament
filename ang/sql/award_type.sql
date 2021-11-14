
--
-- TABLE: award_type
-- 
--  

CREATE TABLE award_type (
  id varchar(32) NOT NULL 
);

-- 
ALTER TABLE award_type ADD CONSTRAINT new_unique_constraint PRIMARY KEY (id);

-- CHECK Constraints are not supported in Mysql (as of version 5.x)
-- But it'll parse the statements without error 

CREATE INDEX award_type_id_index  ON award_type(id);
