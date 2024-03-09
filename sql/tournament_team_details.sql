
CREATE  OR REPLACE VIEW `tournament_team_details` AS
SELECT id, entity_id as team_id, coaches_85 as coaches
, equations_21 as equations_flight, on_sets_22 as on_sets_flight, linguishtik_23 as linguishtik_flight, propaganda_24 as propaganda_flight, presidents_25 as presidents_flight, world_events_26 as theme_flight, wff_n_proof_27 as wff_n_proof_flight, current_events_74 as current_events_flight
, district_equations_seed_29 as district_equations_seed, district_on_sets_seed_31 as district_on_sets_seed, district_linguishtik_seed_33 as district_linguishtik_seed, district_wff_n_proof_seed_35 as district_wff_n_proof_seed
, league_equations_seed_30 as league_equations_seed, league_on_sets_seed_32 as league_on_sets_seed, league_linguishtik_seed_34 as league_linguishtik_seed, league_wff_n_proof_seed_36 as league_wff_n_proof_seed
, equations_section_75 as equations_section, on_sets_section_76 as on_sets_section, linguishtik_section_77 as linguishtik_section, wff_n_proof_section_78 as wff_n_proof_section
FROM agloa.civicrm_value_team_data_7;
