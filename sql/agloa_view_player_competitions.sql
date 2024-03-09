
-- --------------------------------------------------------

--
-- Structure for view `player_competitions`
--
DROP TABLE IF EXISTS `player_competitions`;

DROP VIEW IF EXISTS `player_competitions`;
CREATE OR REPLACE ALGORITHM=UNDEFINED SQL SECURITY DEFINER VIEW `player_competitions`  AS SELECT `player_registration`.`contact_id` AS `player_id`, `player_registration`.`registered_by_id` AS `registered_by_id`, concat(if((length(`player_competitions`.`equations_11`) > 0),'E',''),if((length(`player_competitions`.`on_sets_12`) > 0),'O',''),if((length(`player_competitions`.`linguishtik_13`) > 0),'L',''),if((length(`player_competitions`.`propaganda_14`) > 0),'P',''),if((length(`player_competitions`.`presidents_15`) > 0),'M',''),if((length(`player_competitions`.`world_events_16`) > 0),'T',''),if((length(`player_competitions`.`current_events_56`) > 0),'C',''),if((length(`player_competitions`.`wff_n_proof_17`) > 0),'W','')) AS `competitions` FROM ((`civicrm_participant` `player_registration` join `civicrm_participant_status_type` on(((`civicrm_participant_status_type`.`id` = `player_registration`.`status_id`) and (`civicrm_participant_status_type`.`name` in ('Registered','Attended'))))) join `civicrm_value_games_registration_5` `player_competitions` on((`player_competitions`.`entity_id` = `player_registration`.`id`))) WHERE ((`player_registration`.`event_id` = (select `latest_active_tournament`.`id` from `latest_active_tournament`)) AND (`player_registration`.`role_id` = (select `player_participant_role`.`value` from `player_participant_role`))) ;
