
-- --------------------------------------------------------

--
-- Structure for view `latest_active_tournament_participant_data`
--
DROP TABLE IF EXISTS `latest_active_tournament_participant_data`;

DROP VIEW IF EXISTS `latest_active_tournament_participant_data`;
CREATE OR REPLACE ALGORITHM=UNDEFINED SQL SECURITY DEFINER VIEW `latest_active_tournament_participant_data`  AS SELECT `latp`.`contact_id` AS `contact_id`, `latp`.`sort_name` AS `sort_name`, `latp`.`status` AS `status`, `latp`.`role` AS `role`, `latp`.`fee_level` AS `fee_level`, `latp`.`register_date` AS `register_date`, `pd`.`id` AS `id`, `pd`.`entity_id` AS `entity_id`, `pd`.`tee_shirt_size_18` AS `tee_shirt_size_18`, `pd`.`picture_57` AS `picture_57`, `pd`.`name_of_nominator_s__58` AS `name_of_nominator_s__58`, `pd`.`relationship_of_nominator_s_to_n_59` AS `relationship_of_nominator_s_to_n_59`, `pd`.`how_many_national_tournaments_ha_61` AS `how_many_national_tournaments_ha_61`, `pd`.`how_many_years_has_the_nominee_b_62` AS `how_many_years_has_the_nominee_b_62`, `pd`.`please_explain_examples_of_educa_65` AS `please_explain_examples_of_educa_65`, `pd`.`please_relate_an_anecdotal_acade_66` AS `please_relate_an_anecdotal_acade_66`, `pd`.`please_make_any_other_comments_t_67` AS `please_make_any_other_comments_t_67`, `pd`.`at_what_age_levels_does_the_nomi_68` AS `at_what_age_levels_does_the_nomi_68`, `pd`.`which_games_does_the_nominee_nor_70` AS `which_games_does_the_nominee_nor_70`, `pd`.`what_success_locally_and_nationa_71` AS `what_success_locally_and_nationa_71`, `pd`.`which_national_championships_has_72` AS `which_national_championships_has_72`, `pd`.`housing_group_73` AS `housing_group_73` FROM (`latest_active_tournament_participants` `latp` left join `participant_data` `pd` on((`latp`.`id` = `pd`.`entity_id`))) ;
