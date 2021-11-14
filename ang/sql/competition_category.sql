
--
-- TABLE: competition_category
-- 
--  

CREATE TABLE competition_category (
  id varchar(20) COLLATE utf8_unicode_ci NOT NULL ,
  label varchar(512) COLLATE utf8_unicode_ci NOT NULL ,
  name varchar(512) COLLATE utf8_unicode_ci NOT NULL 
);

-- 
ALTER TABLE competition_category ADD CONSTRAINT competition_category_pk PRIMARY KEY (id);

-- CHECK Constraints are not supported in Mysql (as of version 5.x)
-- But it'll parse the statements without error 
