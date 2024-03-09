
-- --------------------------------------------------------

--
-- Structure for view `latest_active_tournament`
--
DROP TABLE IF EXISTS `latest_active_tournament`;

DROP VIEW IF EXISTS `latest_active_tournament`;
CREATE OR REPLACE ALGORITHM=UNDEFINED SQL SECURITY DEFINER VIEW `latest_active_tournament`  AS SELECT `t`.`id` AS `id` FROM (`tournament_ids` `t` join `civicrm_event` `ce` on((`ce`.`id` = `t`.`id`))) WHERE (`ce`.`is_active` = 1) ORDER BY `ce`.`start_date` DESC LIMIT 0, 1 ;
