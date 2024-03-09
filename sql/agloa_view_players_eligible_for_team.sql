
-- --------------------------------------------------------

--
-- Structure for view `players_eligible_for_team`
--
DROP TABLE IF EXISTS `players_eligible_for_team`;

DROP VIEW IF EXISTS `players_eligible_for_team`;
CREATE OR REPLACE ALGORITHM=UNDEFINED SQL SECURITY DEFINER VIEW `players_eligible_for_team`  AS SELECT `team_player_intersections`.`team_id` AS `team_id`, `team_player_intersections`.`player_id` AS `player_id` FROM ((select `team`.`team_id` AS `team_id`,`player`.`contact_id` AS `player_id`,count(0) AS `intersections_count` from (`agloa_active_team_competitions_pivoted` `team` join `registered_players_not_on_team` `player` on((`team`.`competition` = `player`.`competition`))) group by `team`.`team_id`,`player_id`) `team_player_intersections` join (select `agloa_active_team_competitions_pivoted`.`team_id` AS `team_id`,count(0) AS `competitions_count` from `agloa_active_team_competitions_pivoted` group by `agloa_active_team_competitions_pivoted`.`team_id`) `team_competitions_count` on((`team_player_intersections`.`team_id` = `team_competitions_count`.`team_id`))) WHERE (`team_player_intersections`.`intersections_count` = `team_competitions_count`.`competitions_count`) ;
