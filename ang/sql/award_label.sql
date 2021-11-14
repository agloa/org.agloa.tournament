
--
-- TABLE: award_label
-- 
--  

CREATE TABLE award_label (
  id varchar(32) NOT NULL 
);

-- 
ALTER TABLE award_label ADD CONSTRAINT new_unique_constraint PRIMARY KEY (id);

-- CHECK Constraints are not supported in Mysql (as of version 5.x)
-- But it'll parse the statements without error 
