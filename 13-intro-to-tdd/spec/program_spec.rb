require_relative '../program.rb'

# Describe
# if expect
# some stuff

# 1. true
# 2. false
# 3. Edge Cases <=== something else???
# => What if we feed it an array?
describe "palindrome method" do
  it "should return true for an actual palindrome" do
    expect(is_palindrome?("racecar")).to eq(true)
    expect(is_palindrome?("radar")).to eq(true)
  end

  it "should return false for non-palindromes" do
    expect(is_palindrome?("chair")).to eq(false)
    expect(is_palindrome?("flatiron")).to eq(false)
  end

  # all of these edge cases: you will think about them
  # Zordon will answer your question.
  it "should return true for palindromic arrays" do
    expect(is_palindrome?([1, 0, 1])).to eq(true)
    expect(is_palindrome?([2, 2, 2])).to eq(true)
  end

  it "should return false for non-palindromic arrayas" do
    expect(is_palindrome?([1, 2, 2])).to eq(false)
  end

  # what about empty arrays or strings or with spaces???
  # crazy rabbit holes?!?!?!
  it "should return false empty arrays" do
    expect(is_palindrome?([])).to eq(false)
  end

  it "should return false empty strings" do
    expect(is_palindrome?("")).to eq(false)
  end

  it "should return false if it's not character for character a palindrome" do
    expect(is_palindrome?("not now wonton")).to eq(false)
  end

  it "should return false if it's not a perfect palindrome" do
    expect(is_palindrome?(["not", "now", "wonton"])).to eq(false)
  end

  it "should be true for numbers that are palindromes" do
    expect(is_palindrome?(121)).to eq(true)
  end

  it "should be ____ for ___" do
    expect(is_palindrome?(121.121)).to eq(true)
  end

  it "should throw an ArgumentError if it's a boolean" do
    expect { is_palindrome?(true) }.to raise_error(ArgumentError)
    # InvalidInputError
  end

  it "should return false if it's has punctuation" do
    expect(is_palindrome?("racecar!!!")).to eq(false)
  end
  # TODO:

  # symbols
  # emoji - unicode
  # "                racecar              "
  # "b"
  # "bbbbbbbbbbb"
  # RaceCar ---uhhhh
end
