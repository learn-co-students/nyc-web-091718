require 'pry'

# def is_palindrome?(word)
#   raise ArgumentError if !word.is_a?(String)
#   downcased_word = word.downcase.gsub(/\W/,"")
#   return false if downcased_word.length < 2
#   downcased_word == downcased_word.reverse
# end

# what's a palindrome?
# a word that's spelled the same forwards as it is backwards
def is_palindrome?(word)
  original_input = word

  if word.class == TrueClass || word.class == FalseClass
    raise ArgumentError
  end

  if word.class == Fixnum || word.class == Float
    word = word.to_s
  end

  if word.empty?
  # if word.length == 0
  # if word == []
    return false
  end

  word.reverse == word

end

# binding.pry
