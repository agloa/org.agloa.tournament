
-- --------------------------------------------------------

--
-- Structure for view `latest_active_tournament_participants_multiplicity`
--
DROP TABLE IF EXISTS `latest_active_tournament_participants_multiplicity`;

DROP VIEW IF EXISTS `latest_active_tournament_participants_multiplicity`;
CREATE OR REPLACE ALGORITHM=UNDEFINED SQL SECURITY DEFINER VIEW `latest_active_tournament_participants_multiplicity`  AS SELECT DISTINCT `t1`.`contact_id` AS `CONTACT_ID`, (select count(0) from `latest_active_tournament_participants` `t2` where (`t1`.`contact_id` = `t2`.`contact_id`)) AS `N` FROM `latest_active_tournament_participants` AS `t1` ;
