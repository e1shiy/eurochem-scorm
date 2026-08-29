type CompletionStatus = "completed" | "incomplete" | "not attempted" | "unknown"
type SuccessStatus = "passed" | "failed" | "unknown"
type ScoreScaled = number // (-1, 1)
type Location = string // max: 1000
type Exit = "timeout" | "suspend" | "logout" | "normal" | "" // suspend=save, ""=reset
type ProgressMeasure = number // (0, 1), percents for progress bar
type Interaction = {
	id: number
	type: "true-false" | "choise" | "performance" | "sequencing" | "likert"
	weighting: number
	result: "correct" | "incorrect" | "unanticipated" | "neutral"
	description: string // max: 250
	objectives: { id: string }[]
}
type Objective = {
	id: string
	status: SuccessStatus
	completion_status: CompletionStatus
	description: string
	progress_measure: number // (0, 1)
	score: {
		scaled: number // (-1, 1)
		raw: number
	}
}

/* 
	- Initialize
	
	- Terminate (all cases)
	
	пример Interaction, пример Objective?
	данные в LocalStorage кладёт LMS или SCO?
	
	можно/нужно ли использовать переменные с _подчеркиванием?
	делаем точь в точь или можно улучшать UX?
*/