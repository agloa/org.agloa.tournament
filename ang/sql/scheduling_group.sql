
--
-- TABLE: scheduling_group
-- 
--  

CREATE TABLE scheduling_group (
  id varchar(20) COLLATE utf8_unicode_ci NOT NULL ,
  label varchar(64) COLLATE utf8_unicode_ci NOT NULL ,
  description text COLLATE utf8_unicode_ci NOT NULL ,
  sponsor_org varchar(20) COLLATE utf8_unicode_ci NOT NULL ,
  region varchar(5) COLLATE utf8_unicode_ci NOT NULL 
);

-- CHECK Constraints are not supported in Mysql (as of version 5.x)
-- But it'll parse the statements without error 
