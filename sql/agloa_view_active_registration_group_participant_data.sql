
-- --------------------------------------------------------

--
-- Structure for view `active_registration_group_participant_data`
--
DROP TABLE IF EXISTS `active_registration_group_participant_data`;

DROP VIEW IF EXISTS `active_registration_group_participant_data`;
CREATE OR REPLACE ALGORITHM=UNDEFINED SQL SECURITY DEFINER VIEW `active_registration_group_participant_data`  AS SELECT `arcg`.`group_id` AS `group_id`, `arcg`.`title` AS `title`, `arcg`.`created_by` AS `created_by`, `arcg`.`modified_by` AS `modified_by`, `latpd`.`contact_id` AS `contact_id`, `latpd`.`sort_name` AS `sort_name`, `latpd`.`status` AS `status`, `latpd`.`role` AS `role`, `latpd`.`fee_level` AS `fee_level`, `latpd`.`register_date` AS `register_date`, `latpd`.`id` AS `id`, `latpd`.`entity_id` AS `entity_id`, `latpd`.`tee_shirt_size_18` AS `tee_shirt_size_18`, `latpd`.`picture_57` AS `picture_57`, `latpd`.`name_of_nominator_s__58` AS `name_of_nominator_s__58`, `latpd`.`relationship_of_nominator_s_to_n_59` AS `relationship_of_nominator_s_to_n_59`, `latpd`.`how_many_national_tournaments_ha_61` AS `how_many_national_tournaments_ha_61`, `latpd`.`how_many_years_has_the_nominee_b_62` AS `how_many_years_has_the_nominee_b_62`, `latpd`.`please_explain_examples_of_educa_65` AS `please_explain_examples_of_educa_65`, `latpd`.`please_relate_an_anecdotal_acade_66` AS `please_relate_an_anecdotal_acade_66`, `latpd`.`please_make_any_other_comments_t_67` AS `please_make_any_other_comments_t_67`, `latpd`.`at_what_age_levels_does_the_nomi_68` AS `at_what_age_levels_does_the_nomi_68`, `latpd`.`which_games_does_the_nominee_nor_70` AS `which_games_does_the_nominee_nor_70`, `latpd`.`what_success_locally_and_nationa_71` AS `what_success_locally_and_nationa_71`, `latpd`.`which_national_championships_has_72` AS `which_national_championships_has_72`, `latpd`.`housing_group_73` AS `housing_group_73` FROM (`active_registration_group_contacts` `arcg` join `latest_active_tournament_participant_data` `latpd` on((`latpd`.`contact_id` = `arcg`.`contact_id`))) ;
