"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const mongoose_1 = tslib_1.__importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const profileSchema = new Schema({
    uid: { type: Number, index: true },
    settings: {
        country: String,
        province: String,
        city: String,
        school: String,
        education: String,
        profession: String,
        industry: String,
        org: String,
        job: String,
        intro: String,
        contact: String
    },
    note: {
        savedUserCount: { type: Number, default: 0 },
        savedCaseCount: { type: Number, default: 0 },
        savedTagCount: { type: Number, default: 0 },
        saveMeCount: { type: Number, default: 0 },
        likeMeCount: { type: Number, default: 0 }
    }
});
mongoose_1.default.model('Profile', profileSchema);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZ3JhcGhxbC1zY2hlbWFzL3Byb2ZpbGUvbW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsZ0VBQWdDO0FBQ2hDLE1BQU0sTUFBTSxHQUFHLGtCQUFRLENBQUMsTUFBTSxDQUFDO0FBRy9CLE1BQU0sYUFBYSxHQUFHLElBQUksTUFBTSxDQUFDO0lBQ2hDLEdBQUcsRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBa0M7SUFDbEUsUUFBUSxFQUFFO1FBQ1QsT0FBTyxFQUFFLE1BQU07UUFDZixRQUFRLEVBQUUsTUFBTTtRQUNoQixJQUFJLEVBQUUsTUFBTTtRQUVaLE1BQU0sRUFBRSxNQUFNO1FBQ2QsU0FBUyxFQUFFLE1BQU07UUFDakIsVUFBVSxFQUFFLE1BQU07UUFFbEIsUUFBUSxFQUFFLE1BQU07UUFDaEIsR0FBRyxFQUFFLE1BQU07UUFDWCxHQUFHLEVBQUUsTUFBTTtRQUVYLEtBQUssRUFBRSxNQUFNO1FBRWIsT0FBTyxFQUFFLE1BQU07S0FDZjtJQUdELElBQUksRUFBRTtRQUNMLGNBQWMsRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRTtRQUM1QyxjQUFjLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUU7UUFDNUMsYUFBYSxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFO1FBQzNDLFdBQVcsRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRTtRQUN6QyxXQUFXLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUU7S0FDekM7Q0F5Q0QsQ0FBQyxDQUFDO0FBRUgsa0JBQVEsQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLGFBQWEsQ0FBQyxDQUFDIn0=