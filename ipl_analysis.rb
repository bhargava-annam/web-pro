require 'csv'
require 'json'

# Generate json file for problem1
# Reading  data from deliveries file
table = CSV.parse(File.read('deliveries.csv'), headers: true)

# Storing teams and total runs in to teams hash
teams = Hash.new(0)
table.each do |row|
  teams[row['batting_team']] += row['total_runs'].to_i
end
teams.delete('Rising Pune Supergiants')

# Writing the json file
File.write('./json/problem1.json', JSON.dump(teams))

# Generate json file for problem2
# Reading  data from deliveries file
table = CSV.parse(File.read('deliveries.csv'), headers: true)

# Storing RCB batsmen ans their scores into batsmen hash
batsmen = Hash.new(0)
table.each do |row|
  batsmen[row['batsman']] += row['total_runs'].to_i if row['batting_team'] == 'Royal Challengers Bangalore'
end

# Getting the top 5 batsmen of RCB
top_5_batsmen = Hash[batsmen.sort_by { |_k, v| -v }[0..4]]

# labeling the Graph

top_5_batsmen.each_with_index { |(name, _value), idx| }

# Writing the json file
File.write('./json/problem2.json', JSON.dump(top_5_batsmen))

# Generate json for problem3
# Reading  data from umpires file
table = CSV.parse(File.read('umpires.csv'), headers: true)
umpires = Hash.new(0)
table.each do |row|
  umpires[row['Nationality']] += 1.to_i if row['Nationality'] != 'India'
end

# Labeling the Graph
labels = {}
umpires.each_with_index { |(name, _value), idx| labels[idx] = name[0..3] }

# Writing the json file
File.write('./json/problem3.json', JSON.dump(umpires))

# Generate json for problem4
# Reading  data from umpires file
table = CSV.parse(File.read('matches.csv'), headers: true)

len = table.length
seasons = Hash.new(0)
teams_arr = table['team1'].uniq
years_arr = table['season'].uniq.sort
teams_arr.delete('Rising Pune Supergiants')

# Transforming the raw data into hash form
teams_arr.each do |team|
  seasons[team] = []
  years_arr.each do |yr|
    sum = 0
    (0..len - 1).each do |row|
      sum += 1 if (table[row]['season'] == yr) && ((table[row]['team1'] == team) || (table[row]['team2'] == team))
    end
    seasons[team] << sum
  end
end

# Labeling the graph
labels = {}
years_arr.each_with_index { |yrs, idx| labels[idx] = yrs }

# Writing the json file
File.write('./json/problem4.json', JSON.dump(seasons))
