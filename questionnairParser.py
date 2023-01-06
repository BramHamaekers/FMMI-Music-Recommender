AList = []
ARanking = []
BList = []
BRanking = []

def getAveragesAndMedians(list) :
    amountOfAnswers = len(list)
    amountOfQuestions = len(list[0])
    AveragesAndMedians = [0] * amountOfQuestions * 2
    
    # Calculate averages
    for i in range(amountOfAnswers):
        for j in range(amountOfQuestions):
            AveragesAndMedians[j] += float(list[i][j])
    
    for i in range(amountOfQuestions):
        AveragesAndMedians[i] = AveragesAndMedians[i]/amountOfAnswers

    # Calculate medians
    if (amountOfAnswers % 2 == 1):
        for i in range(amountOfQuestions):
            sorted(list, key=lambda x: x[i])
            AveragesAndMedians[amountOfQuestions+i] = float(list[int((amountOfAnswers + 1)/2)][i])
    else:
        for i in range(amountOfQuestions):
            sorted(list, key=lambda x: x[i])
            AveragesAndMedians[amountOfQuestions+i] = (float(list[int(amountOfAnswers/2)][i]) + float(list[int((amountOfAnswers/2) + 1)][i]))/2

    return AveragesAndMedians



with open('questionnair_results.txt') as f:
    for line in f:
        questionnairLine = line.strip().split("\t")
        if ((questionnairLine[0] == "A") & (questionnairLine[1] == "list")): AList.append(questionnairLine[2:14])
        elif ((questionnairLine[0] == "A") & (questionnairLine[1] == "ranking")): ARanking.append(questionnairLine[2:14])
        elif ((questionnairLine[0] == "B") & (questionnairLine[1] == "list")): BList.append(questionnairLine[2:14])
        elif ((questionnairLine[0] == "B") & (questionnairLine[1] == "ranking")): BRanking.append(questionnairLine[2:14])

#print(*AList,sep='\n')
print("Amount of A list answers: " + str(len(AList)))
print("Amount of A ranking answers: " + str(len(ARanking)))
print("Amount of B list answers: " + str(len(BList)))
print("Amount of B ranking answers: " + str(len(BRanking)))

print("Averages for A list select: " + ', '.join(list(map(str, getAveragesAndMedians(AList)[0:len(AList[0])]))))
print("Medians for A list select: " + ', '.join(list(map(str, getAveragesAndMedians(AList)[len(AList[0]):]))))
print("Averages for A ranking select: " + ', '.join(list(map(str, getAveragesAndMedians(ARanking)[0:len(ARanking[0])]))))
print("Medians for A ranking select: " + ', '.join(list(map(str, getAveragesAndMedians(ARanking)[len(ARanking[0]):]))))
print("Averages for B list select: " + ', '.join(list(map(str, getAveragesAndMedians(BList)[0:len(BList[0])]))))
print("Medians for B list select: " + ', '.join(list(map(str, getAveragesAndMedians(BList)[len(BList[0]):]))))
print("Averages for B ranking select: " + ', '.join(list(map(str, getAveragesAndMedians(BRanking)[0:len(BRanking[0])]))))
print("Medians for B ranking select: " + ', '.join(list(map(str, getAveragesAndMedians(BRanking)[len(BRanking[0]):]))))

print("Averages for list select: " + ', '.join(list(map(str, getAveragesAndMedians(AList + BList)[0:len(BRanking[0])]))))
print("Medians for list select: " + ', '.join(list(map(str, getAveragesAndMedians(AList + BList)[len(BRanking[0]):]))))

print("Averages for ranking select: " + ', '.join(list(map(str, getAveragesAndMedians(ARanking + BRanking)[0:len(BRanking[0])]))))
print("Medians for ranking select: " + ', '.join(list(map(str, getAveragesAndMedians(ARanking + BRanking)[len(BRanking[0]):]))))

for j in range(12) :

    print(j-1)
    for i in range(len(AList)) : print(AList[i][j], end = ',')
    for i in range(len(BList)) : print(BList[i][j], end = ',')
    print("")
    for i in range(len(ARanking)) : print(ARanking[i][j], end = ',')
    for i in range(len(BRanking)) : print(BRanking[i][j], end = ',')
    print("")

#print(getAveragesAndMedians(AList))
#print(getAveragesAndMedians(ARanking))
#print(getAveragesAndMedians(BList))
#print(getAveragesAndMedians(BRanking))

listCount = []
rankingCount = []

print(AList)
print(BList)

for i in range(2,12):
    listCountTemp = [0,0,0,0,0]
    rankingCountTemp = [0,0,0,0,0]
    for answers in AList:
        if (answers[i] == '1'): listCountTemp[0] += 1
        elif (answers[i] == '2'): listCountTemp[1] += 1
        elif (answers[i] == '3'): listCountTemp[2] += 1
        elif (answers[i] == '4'): listCountTemp[3] += 1
        elif (answers[i] == '5'): listCountTemp[4] += 1

    for answers in ARanking:
        if (answers[i] == '1'): rankingCountTemp[0] += 1
        elif (answers[i] == '2'): rankingCountTemp[1] += 1
        elif (answers[i] == '3'): rankingCountTemp[2] += 1
        elif (answers[i] == '4'): rankingCountTemp[3] += 1
        elif (answers[i] == '5'): rankingCountTemp[4] += 1

    for answers in BList:
        if (answers[i] == '1'): listCountTemp[0] += 1
        elif (answers[i] == '2'): listCountTemp[1] += 1
        elif (answers[i] == '3'): listCountTemp[2] += 1
        elif (answers[i] == '4'): listCountTemp[3] += 1
        elif (answers[i] == '5'): listCountTemp[4] += 1

    for answers in BRanking:
        if (answers[i] == '1'): rankingCountTemp[0] += 1
        elif (answers[i] == '2'): rankingCountTemp[1] += 1
        elif (answers[i] == '3'): rankingCountTemp[2] += 1
        elif (answers[i] == '4'): rankingCountTemp[3] += 1
        elif (answers[i] == '5'): rankingCountTemp[4] += 1

    listCount.append(listCountTemp)
    rankingCount.append(rankingCountTemp)

#print(listCount)
#print(rankingCount)