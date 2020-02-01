<?php
	$WEIGHT_INCREMENT = 1;
	$charsRead = Array();
	$prevChar = false;
	while ( ($line = fgets(STDIN)) !== false) {
		for ($i = 0; $i < strlen($line); $i++) {
			$thisChar = $line[$i];
			if (!isset($charsRead[$thisChar])) {
				$charsRead[$thisChar] = graph.add($thisChar,$prevChar);
				if (isset($charsRead[$thisChar.$prevChar]) {
					$charsRead[$prevChar.$thisChar] += $WEIGHT_INCREMENT;
				} else {
					$charsRead[$prevChar.$thisChar] = 1;
				}

				foreach ($charsRead as $k => $v) {
					if ($v != $thisChar && isset($charsRead[$]))
				}
			}
		}
	}

	class Graph {
		function add(node1, node2) {
			$this->find(node1);
			$this->find(node2);

		}
	}
?>


asdf['a']
asdf['ab']
asdf['abc']
asdf['abc ']


asdf['abc'] = 'c'
asdf[asdf['abc']] === asdf['c']



a
|\
b-c-+
  |/
  d

node a
connection ab
asdf[ab] = weight (directional)
asdf[ba] = weight (directional)
asdf[a] = ?


is asdf[a]?
  yes:
    is asdf[ab]?
	  yes:
	  no:
  no:



function check(a0, a1, energy) {
	if (energy == 0) {
		return;
	}
	if (connection(a0, a1)) {
		check all connections a1:*
	}
}

$ENERGY_WEIGHT_SCALAR = 0.1;

$prevChar = false;
while ($c = getCharacter()) {
	if (!isset($graph0[$c])) {
		$graph0[$c] = 1;
	}
	if ($prevChar !== false) {
		if (!isset($graph0[$prevChar.$c])) {
			$graph0[$prevChar.$c] = 0;
		} else {
			$graph0[$prevChar.$c]++;
		}
		check($prevChar,$c);
	}
	$graph1 = array_merge($graph1, $graph0);
}

function check ($a0, $a1, $energy) {
	if ($energy == 0) return 0;
	if (isset($graph1[$a0.$a1])) {
		$maxScore = 0;
		$bestConnection = false;
		foreach ($graph1 as $k => $v) {
			if ($graph0[$v.$a0]) {
				$score = check($v, $a0, $energy-1+floor($graph0[$v.$a0]*$ENERGY_WEIGHT_SCALAR));
				if ($score > $maxScore) {
					$maxScore = $score;
					$bestConnection = $v.$a0;
				}
			}
		}
		if ($maxScore > 0) {
			$graph1[$bestConnection]++;
		}
		return $graph1[$a0.$a1] + $maxScore;
	}
}




a-b-c-d-e-f

e-f

f
|\
e d
|  \
d   s
|    \
c     a


a                           a
b c                         b c
d e f                       d e f


buildWorkingMemory() {
	$c = getCharacter();
	if (eof) {
		return $c;
	}
	foreach ($workingMemory as $k => $v)
	return $c . buildWorkingMemory();
}


do($workingMemory, $nextChar, $ltMemory) {
	//do various traversals of $ltMemory to match $workingMemory
}




a

a
b
ab

a
b
c
ab
bc
abc

a
b
c
d
ab
bc
cd
abc
bcd
abcd


$MAX_READ_STR = 20;
$strRead = '';
while ($c = getCharacter()) {
	for ($i = 0; $i < strlen($strRead); $i++) {
		addWorkingMemory(substr($strRead,$i).$c);
	}
	$strRead .= $c;
	if (strlen($strRead) > $MAX_READ_STR) {
		$strRead = substr($strRead,1);
	}
}

addWorkingMemory($key) {
	if (!isset($workingMemory[$key])) {
		$workingMemory[$key] = 1;
	} else {
		$workingMemory[$key]++;
	}
}
