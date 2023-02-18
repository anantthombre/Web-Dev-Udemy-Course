import re

patterns = ["term1", "term2"]

text = "This is a string with term1, and not the other"

for pattern in patterns:
    print("I'm searching for: " + pattern)

    if re.search(pattern, text):
        print("Match!!!")
    else:
        print("No Match")


match = re.search("term1", text)
print(match.start())


split_term = "@"

email = "user@gmail.com"

print(re.split(split_term, email))

print(re.findall("match", "test phrase match in match middle"))

def multi_re_find(patterns, phrase):


    for pat in patterns:
        print("Searching for pattern {}".format(pat))
        print(re.findall(pat,phrase))
        print("\n")


test_phrase = "sdsd..sssddd..sdddsddd...dsds...dssssss...sddddd"

test_patterns = ["sd*"]

multi_re_find(test_patterns, test_phrase)


test_patterns = ["sd+"]

multi_re_find(test_patterns, test_phrase)

test_patterns = ["sd?"]

multi_re_find(test_patterns, test_phrase)

test_patterns = ["sd{3}"]

multi_re_find(test_patterns, test_phrase)

test_patterns = ["sd{1,3}"]

multi_re_find(test_patterns, test_phrase)

test_patterns = ["sd[sd+]"]

multi_re_find(test_patterns, test_phrase)