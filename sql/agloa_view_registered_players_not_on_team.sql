
-- --------------------------------------------------------

--
-- Structure for view `registered_players_not_on_team`
--
DROP TABLE IF EXISTS `registered_players_not_on_team`;

DROP VIEW IF EXISTS `registered_players_not_on_team`;
CREATE OR REPLACE ALGORITHM=UNDEFINED SQL SECURITY DEFINER VIEW `registered_players_not_on_team`  AS SELECT `pct`.`contact_id` AS `contact_id`, `pct`.`sort_name` AS `sort_name`, `pct`.`competition` AS `competition`, `pct`.`competition_type` AS `competition_type`, `arcg`.`title` AS `registration_group` FROM (`player_competition_type` `pct` join `active_registration_group_contacts` `arcg` on((`arcg`.`contact_id` = `pct`.`contact_id`))) WHERE exists(select 1 from `agloa_active_team_player_competition` `aatpc` where ((`aatpc`.`contact_id` = `pct`.`contact_id`) AND (`aatpc`.`competition_type` = `pct`.`competition_type`))) is false ORDER BY `pct`.`competition` ASC, `arcg`.`title` ASC ;
