import * as apiModel from './api/project.api-model';
import * as viewModel from './project.vm';
import {
  mapEmployeeSummaryFromApiToVm,
  mapEmployeeSummaryListFromApiToVm,
  mapProjectFromApiToVm,
} from './project.mapper';

describe('./pods/project/project.mapper', () => {
  describe('mapEmployeeSummaryFromApiToVm', () => {
    it('should return an empty employee when feeding null value', () => {
      const result = mapEmployeeSummaryFromApiToVm(null);
      expect(result).toEqual({});
    });

    it('should return an empty employee when feeding undefined value', () => {
      const result = mapEmployeeSummaryFromApiToVm(undefined);
      expect(result).toEqual({});
    });

    it('should map api model to view model correctly', () => {
      const apiEmployeeSummary: apiModel.EmployeeSummary = {
        id: 'test-id',
        isAssigned: true,
        employeeName: 'test-name',
      };

      const result = mapEmployeeSummaryFromApiToVm(apiEmployeeSummary);
      expect(result).toEqual(apiEmployeeSummary);
    });
  });

  describe('mapEmployeeSummaryListFromApiToVm', () => {
    it('should return empty array when feeding null value', () => {
      const result = mapEmployeeSummaryListFromApiToVm(null);
      expect(result).toEqual([]);
    });

    it('should return empty array when feeding undefined value', () => {
      const result = mapEmployeeSummaryListFromApiToVm(undefined);
      expect(result).toEqual([]);
    });

    it('should map api model list to view model list correctly', () => {
      const apiEmployeeSummaries: apiModel.EmployeeSummary[] = [
        {
          id: 'test-id-1',
          isAssigned: true,
          employeeName: 'test-name-1',
        },
        {
          id: 'test-id-22',
          isAssigned: false,
          employeeName: 'test-name-2',
        },
      ];

      const result = mapEmployeeSummaryListFromApiToVm(apiEmployeeSummaries);
      expect(result).toEqual(apiEmployeeSummaries);
    });
  });

  describe('mapProjectFromApiToVm', () => {
    it('should return an empty project when feeding null value', () => {
      const result = mapProjectFromApiToVm(null);
      expect(result).toEqual(viewModel.createEmptyProject());
    });

    it('should return an empty project when feeding undefined value', () => {
      const result = mapProjectFromApiToVm(undefined);
      expect(result).toEqual(viewModel.createEmptyProject());
    });

    it('should map api model to view model correctly when project is provided', () => {
      const apiProject: apiModel.Project = {
        id: 'test-id-1',
        name: 'test-name',
        externalId: 'test-external-id',
        comments: 'test-comments',
        isActive: true,
        employees: [
          {
            id: 'test-temp-id-2',
            isAssigned: true,
            employeeName: 'test-temp-name',
          },
        ],
      };

      const expectedResult: viewModel.Project = {
        ...apiProject,
        employees: [
          {
            id: 'test-temp-id-2',
            isAssigned: true,
            employeeName: 'test-temp-name',
          },
        ],
      };

      const result = mapProjectFromApiToVm(apiProject);
      expect(result).toEqual(expectedResult);
    });
  });
});
