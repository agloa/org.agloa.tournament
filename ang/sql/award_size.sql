
--
-- TABLE: award_size
-- 
--  

CREATE TABLE award_size (
  id varchar(32) NOT NULL 
);

-- 
ALTER TABLE award_size ADD CONSTRAINT new_unique_constraint PRIMARY KEY (id);

-- CHECK Constraints are not supported in Mysql (as of version 5.x)
-- But it'll parse the statements without error 

CREATE INDEX award_size_id_index  ON award_size(id);
