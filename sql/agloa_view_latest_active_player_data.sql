
-- --------------------------------------------------------

--
-- Structure for view `latest_active_player_data`
--
DROP TABLE IF EXISTS `latest_active_player_data`;

DROP VIEW IF EXISTS `latest_active_player_data`;
CREATE OR REPLACE ALGORITHM=UNDEFINED SQL SECURITY DEFINER VIEW `latest_active_player_data`  AS SELECT `latp`.`id` AS `participant_id`, `latp`.`contact_id` AS `contact_id`, `latp`.`sort_name` AS `sort_name`, `pd`.`id` AS `id`, `pd`.`entity_id` AS `entity_id`, `pd`.`equations_11` AS `equations_11`, `pd`.`on_sets_12` AS `on_sets_12`, `pd`.`linguishtik_13` AS `linguishtik_13`, `pd`.`propaganda_14` AS `propaganda_14`, `pd`.`presidents_15` AS `presidents_15`, `pd`.`world_events_16` AS `world_events_16`, `pd`.`wff_n_proof_17` AS `wff_n_proof_17`, `pd`.`geocode_20` AS `geocode_20`, `pd`.`scheulding_code_28` AS `scheulding_code_28`, `pd`.`current_events_56` AS `current_events_56` FROM (`latest_active_tournament_players` `latp` left join `player_data` `pd` on((`pd`.`entity_id` = `latp`.`id`))) ;
