class ProjectMetadata:
  def __init__(self):
    self.interfacesCount = 0 #unmaped
    self.abstractClassesCount = 0 #unmaped
    self.classesCount = 0
    self.derivedClassesCount = 0
    self.multipleDerivedClassesCount = 0 #unmaped
    
    self.filesCount = 0
    self.sourcesCount = 0
    self.headersCount = 0
    self.linesCount = 0 #unmaped
    self.sourcesLinesCount = 0 #unmaped
    self.headersLinesCount = 0 #unmaped
    self.keyWordsList = [] #unmaped
    self.singletonClassesCount = 0 #unmaped
    
    self.pureVirtualFunctionsCount = 0 #unmaped
    self.virtualFunctionsCount = 0
    self.overloadedFunctionsCount = 0 #unmaped
    self.privateMethodsCount = 0
    self.publicMethodsCount = 0
    self.protectedMethodsCount = 0
    
    self.overloadedOperatorsCount = 0 #unmaped
    self.overloadedOperatorsList = [] #unmaped
    self.overridingFunctionsCount = 0 #unmaped
    
    self.constructorsCount = 0 #unmaped
    self.defaultConstructorsCount = 0 #unmaped
    self.parametersConstructorCount = 0 #unmaped
    self.copyConstructorsCount = 0 #unmaped
    self.moveConstructorsCount = 0 #unmaped
    self.destructorsCount = 0 #unmpaed
    
    self.stlElementsCount = 0
    self.templateClassesCount = 0
    self.lambdaFunctionsCount = 0 #unmaped
    self.identifiersLengthMean = 0 #unmaped
    self.emptySpacesCount = 0 #unmaped
    self.readmeWordsCount = 0 #unmpaed 

  def toDictionary(self):
    return {
        "interfacesCount" : self.interfacesCount,
        "abstractClassesCount" : self.abstractClassesCount,
        "classesCount" : self.classesCount,
        "derivedClassesCount" : self.derivedClassesCount,
        "multipleDerivedClassesCount" : self.multipleDerivedClassesCount,
        
        "filesCount" : self.filesCount,
        "sourcesCount" : self.sourcesCount,
        "headersCount" : self.headersCount,
        "linesCount" : self.linesCount,
        "sourcesLinesCount" : self.sourcesLinesCount,
        "headersLinesCount" : self.headersLinesCount,
        "keyWordsList" : self.keyWordsList,
        "singletonClassesCount" : self.singletonClassesCount,
        
        "pureVirtualFunctionsCount" : self.pureVirtualFunctionsCount,
        "virtualFunctionsCount" : self.virtualFunctionsCount,
        "overloadedFunctionsCount" : self.overloadedFunctionsCount,
        "privateMethodsCount" : self.privateMethodsCount,
        "publicMethodsCount" : self.publicMethodsCount,
        "protectedMethodsCount" : self.protectedMethodsCount,
        
        "overloadedOperatorsCount" : self.overloadedOperatorsCount,
        "overloadedOperatorsList" : self.overloadedOperatorsList,
        "overridingFunctionsCount" : self.overridingFunctionsCount,
        
        "constructorsCount" : self.constructorsCount,
        "defaultConstructorsCount" : self.defaultConstructorsCount,
        "parametersConstructorCount" : self.parametersConstructorCount,
        "copyConstructorsCount" : self.copyConstructorsCount,
        "moveConstructorsCount" : self.moveConstructorsCount,
        "destructorsCount" : self.destructorsCount,
        
        "stlElementsCount" : self.stlElementsCount,
        "templateClassesCount" : self.templateClassesCount,
        "lambdaFunctionsCount" : self.lambdaFunctionsCount,
        "identifiersLengthMean" : self.identifiersLengthMean,
        "emptySpacesCount" : self.emptySpacesCount,
        "readmeWordsCount" : self.readmeWordsCount
    }