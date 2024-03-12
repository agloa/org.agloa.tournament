CREATE 
    ALGORITHM = UNDEFINED 
    DEFINER = `agloa`@`%` 
    SQL SECURITY DEFINER
VIEW `competition_participant_distribution_counts` AS
    SELECT 
        `competition_participant_distribution`.`competition_id` AS `competition_id`,
        `competition_participant_distribution`.`registration_group_code` AS `registration_group_code`,
        COUNT(`competition_participant_distribution`.`registration_group_code`) AS `registration_group_count`,
        `competition_participant_distribution`.`scheduling_group_code` AS `scheduling_group_code`,
        COUNT(`competition_participant_distribution`.`scheduling_group_code`) AS `scheduling_group_count`,
        `competition_participant_distribution`.`region_code` AS `region_code`,
        COUNT(`competition_participant_distribution`.`region_code`) AS `region_count`
    FROM
        `competition_participant_distribution`
    GROUP BY `competition_participant_distribution`.`competition_id` , `competition_participant_distribution`.`region_code` , `competition_participant_distribution`.`scheduling_group_code` , `competition_participant_distribution`.`registration_group_code` WITH ROLLUP
