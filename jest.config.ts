export default {
	testEnvironment: "jsdom",
	transform: {
		"^.+\\.tsx?$": "ts-jest",
	},

	setupFilesAfterEnv: ["<rootDir>jest.setup.ts"],

	moduleNameMapper: {
		".+\\.(css|svg)$": require.resolve("jest-transform-stub"),
		"@styles/(.*)": "<rootDir>/src/styles/$1",
		"@utils/(.*)": "<rootDir>/src/utils/$1",
		"@components": "<rootDir>/src/components",
	},

	testPathIgnorePatterns: ["/components/index", ".d.ts"],
	coveragePathIgnorePatterns: ["/components/index", ".d.ts"],
}
