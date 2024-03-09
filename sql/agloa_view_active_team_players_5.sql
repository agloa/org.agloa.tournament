
-- --------------------------------------------------------

--
-- Structure for view `active_team_players_5`
--
DROP TABLE IF EXISTS `active_team_players_5`;

DROP VIEW IF EXISTS `active_team_players_5`;
CREATE OR REPLACE ALGORITHM=UNDEFINED SQL SECURITY DEFINER VIEW `active_team_players_5`  AS SELECT DISTINCT `t1`.`team_id` AS `team_id`, `t1`.`title` AS `title`, (select `active_team_players`.`contact_id` from `active_team_players` where (`active_team_players`.`team_id` = `t1`.`team_id`) order by `active_team_players`.`contact_id` limit 0,1) AS `P1`, (select `active_team_players`.`contact_id` from `active_team_players` where (`active_team_players`.`team_id` = `t1`.`team_id`) order by `active_team_players`.`contact_id` limit 1,1) AS `P2`, (select `active_team_players`.`contact_id` from `active_team_players` where (`active_team_players`.`team_id` = `t1`.`team_id`) order by `active_team_players`.`contact_id` limit 2,1) AS `P3`, (select `active_team_players`.`contact_id` from `active_team_players` where (`active_team_players`.`team_id` = `t1`.`team_id`) order by `active_team_players`.`contact_id` limit 3,1) AS `P4`, (select `active_team_players`.`contact_id` from `active_team_players` where (`active_team_players`.`team_id` = `t1`.`team_id`) order by `active_team_players`.`contact_id` limit 4,1) AS `P5` FROM `active_team_players` AS `t1` ;
