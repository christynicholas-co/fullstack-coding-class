 
 
 <!--SELECT 
p.team_id,
t.name,
t.city,
t.state,
p.fname || ' ' || p.lname "fullname",
p.weight,
CASE 
WHEN p.weight >= 200 THEN 'Heavy'
ELSE 'Medium'
END "Weight Category"
FROM hr.players p
 LEFT JOIN hr.teams t
on t.id = p.team_id 
ORDER BY p.weight ASC;-->

<!-- select player team id , team name, team city, team state, player first name and concatenate with a 'space' to player last name, player weight, use case for: if else staement, when player weight > = 200 then diplay heavy else display medium end and title new row for this case weight category, give teams id of 't' and players id of 'p' and left join by id and team id to include everything on the left side and not in the middle and then order by players weight in ascending order-->